import { useEffect, useRef, useState } from "react";

export const useVideoController = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const syncProgress = () => {
    const video = videoRef.current;
    if (video && video.duration) {
      const percent = (video.currentTime / video.duration) * 100;
      setProgress(percent);

      const handleLoadedMetadata = () => {
        setDuration(video.duration);
      };
      const handleTimeUpdate = () => {
        setCurrentTime(video.currentTime);
      };

      video.addEventListener("loadedmetadata", handleLoadedMetadata);
      video.addEventListener("timeupdate", handleTimeUpdate);

      return () => {
        video.removeEventListener("loadedmetadata", handleLoadedMetadata);
        video.removeEventListener("timeupdate", handleTimeUpdate);
      };
    }
  };

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (video && video.duration) {
      const percent = (video.currentTime / video.duration) * 100;
      setProgress(percent);
    }
  };

  const handleSeek = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    const video = videoRef.current;
    const progressBar = e.currentTarget;
    if (!video || !progressBar) return;

    const rect = progressBar.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const newTime = (clickX / rect.width) * (video.duration || 0);

    video.currentTime = newTime;
  };

  const toggleFullscreen = () => {
    const video = videoRef.current;
    if (!video) return;

    setIsPlaying(!video.paused);
    setProgress(video.currentTime);

    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      // 데스크탑 표준 전체화면
      if (video.requestFullscreen) {
        video.requestFullscreen();
        // 모바일 Safari (iOS)
      } else if ("webkitEnterFullscreen" in video) {
        (
          video as HTMLVideoElement & {
            webkitEnterFullscreen: () => void;
          }
        ).webkitEnterFullscreen();
      } else if ("mozRequestFullScreen" in video) {
        (
          video as HTMLVideoElement & {
            mozRequestFullScreen: () => void;
          }
        ).mozRequestFullScreen();
      }
    }
    syncProgress();
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      const isFullscreenNow = !!document.fullscreenElement;
      setIsFullscreen(isFullscreenNow);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    document.addEventListener("webkitfullscreenchange", handleFullscreenChange); // iOS Safari 대응
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
      document.removeEventListener(
        "webkitfullscreenchange",
        handleFullscreenChange
      );
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleEnded = () => setIsPlaying(false);
    video.addEventListener("ended", handleEnded);
    return () => video.removeEventListener("ended", handleEnded);
  }, []);

  return {
    containerRef,
    videoRef,
    handleTimeUpdate,
    handleSeek,
    togglePlay,
    toggleFullscreen,
    isPlaying,
    progress,
    isFullscreen,
    duration,
    currentTime,
  };
};

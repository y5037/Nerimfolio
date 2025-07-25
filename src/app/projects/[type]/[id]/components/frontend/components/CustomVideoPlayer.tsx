"use client";

import { formatTime } from "@/utils/formatTime";
import Image from "next/image";
import { controller, controllerButton } from "@/app/projects/styles";
import clsx from "clsx";
import { useParams, useRouter } from "next/navigation";
import { useVideoController } from "@/hooks/useVideoController";
import { isMobile } from "@/utils/isMobile";
import { videoData } from "@/data/projects/detail/video";

export default function CustomVideoPlayer() {
  const {
    containerRef,
    videoRef,
    handleSeek,
    togglePlay,
    toggleFullscreen,
    isPlaying,
    progress,
    isFullscreen,
    duration,
    currentTime,
  } = useVideoController();

  const params = useParams();
  const router = useRouter();

  const paramsId = Number(params.id);
  const data = videoData.find((item) => {
    return item.id === paramsId;
  });

  if (!data) return;
  return (
    <div
      ref={containerRef}
      className={clsx(
        "relative w-full mx-auto bg-black rounded-t-lg overflow-hidden"
      )}
    >
      {!isPlaying && progress === 0 && (
        <div
          className={clsx(
            "flex items-center absolute ml-3 right-3 top-3 z-10 bg-[rgba(255,255,255,.7)] rounded px-2 py-1 text-black font-light text-xs gap-1 shadow-gray",
            "max-md:text-[11px]"
          )}
        >
          <Image
            src="/images/projects/detail/common/info.svg"
            alt="!"
            width={15}
            height={15}
          />
          <p>시연은 제가 직접 구현한 주요 기능 위주로 구성되어 있습니다</p>
        </div>
      )}

      <div className={clsx("relative aspect-video")}>
        <video
          ref={videoRef}
          src={data.video}
          preload="metadata"
          muted
          poster={data.thumbnail}
          controls={isFullscreen}
          className={clsx("w-full h-full object-cover")}
        />
      </div>
      <div
        className={clsx("absolute inset-x-0 bottom-0 h-1/2 z-10")}
        style={{
          background:
            "linear-gradient(to bottom, rgba(24,24,24,0), #000000 100%)",
        }}
      />
      <div
        className={clsx(
          "absolute bottom-0 h-1/2 inset-x-0 z-20 px-4 text-white font-light"
        )}
      >
        <div className={clsx("h-full flex flex-col justify-end pb-10")}>
          {!isPlaying && (
            <div
              className={clsx(
                "relative w-[200px] h-[50px] min-h-[35px]",
                "max-md:w-[170px] max-md:h-[30px] max-md:min-h-[30px]",
                "max-[530px]:w-[120px] max-[530px]:h-[20px] max-[530px]:min-h-[20px]"
              )}
            >
              <Image
                src={data.logo}
                alt={data.title}
                fill
                className={clsx(
                  "object-contain object-left",
                  data.id === 2 || data.id === 4 || (data.id === 5 && "")
                )}
              />
            </div>
          )}

          <div
            className={clsx(
              "w-1/2 flex items-center mt-6 mb-2 gap-3",
              "max-[700px]:mt-3 max-[700px]:w-2/3",
              "max-[530px]:w-3/4"
            )}
          >
            <div
              className={clsx(
                "relative flex-1 h-[2px] bg-[rgba(255,255,255,.2)] cursor-pointer"
              )}
              onClick={handleSeek}
            >
              <div
                className={clsx(
                  "h-[2px] bg-[rgba(255,255,255,.4)] transition-all duration-300 ease-linear"
                )}
                style={{ width: `${progress}%` }}
              />
            </div>
            <p className={clsx("opacity-[.5]")}>{`${formatTime(
              currentTime
            )} / ${duration > 0 ? formatTime(duration) : "--:--"}`}</p>
          </div>
          <div
            className={clsx(
              "flex items-center justify-between text-white mb-4",
              "max-[700px]:mb-[-5px]",
              "max-[530px]:mb-[-20px]"
            )}
          >
            <div className={clsx("flex items-center gap-2")}>
              {paramsId > 1 && (
                <button
                  className={controller}
                  onClick={() =>
                    router.push(`/projects/frontend/${paramsId - 1}`)
                  }
                >
                  <div className={controllerButton}>
                    <Image
                      src="/images/projects/detail/common/prev.png"
                      alt="이전"
                      fill
                    />
                  </div>
                </button>
              )}
              <button onClick={togglePlay} className={controller}>
                <div className={controllerButton}>
                  <Image
                    src={
                      isPlaying
                        ? "/images/projects/detail/common/pause.png"
                        : "/images/projects/detail/common/play.png"
                    }
                    alt="Control"
                    fill
                  />
                </div>
              </button>
              {paramsId < 5 && (
                <button
                  className={controller}
                  onClick={() =>
                    router.push(`/projects/frontend/${paramsId + 1}`)
                  }
                >
                  <div className={controllerButton}>
                    <Image
                      src="/images/projects/detail/common/next.png"
                      alt="다음"
                      fill
                    />
                  </div>
                </button>
              )}
            </div>
            <button
              onClick={() => {
                if (isMobile) togglePlay();
                toggleFullscreen();
              }}
              className={controller}
            >
              <div className={controllerButton}>
                <Image
                  src="/images/projects/detail/common/fullscreen.png"
                  alt="Full Screen"
                  fill
                />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

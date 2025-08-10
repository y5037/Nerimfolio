import { useEffect, useRef, useState } from "react";

export const useScrollFade = (isActive: boolean) => {
  const [fadeOpacity, setFadeOpacity] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  const updateFade = () => {
    if (!contentRef.current) return;

    const { scrollTop, scrollHeight, clientHeight } = contentRef.current;

    if (scrollHeight <= clientHeight) {
      setFadeOpacity(0);
      return;
    }

    const isAtBottom = scrollHeight - scrollTop - clientHeight;
    const fadeHeight = 50;

    if (scrollTop === 0) {
      setFadeOpacity(1);
    } else if (isAtBottom <= 0) {
      setFadeOpacity(0);
    } else {
      setFadeOpacity(Math.min(isAtBottom / fadeHeight, 1));
    }
  };

  useEffect(() => {
    if (!isActive && contentRef.current) {
      contentRef.current.scrollTop = 0;
      setFadeOpacity(0);
    }
    if (isActive) {
      updateFade();
    }
  }, [isActive]);

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;

    el.addEventListener("scroll", updateFade);
    return () => el.removeEventListener("scroll", updateFade);
  }, []);

  return { fadeOpacity, contentRef };
};

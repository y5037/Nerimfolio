import { media } from "@/styles/media";
import { useEffect, useState } from "react";

export const useScrollOpacity = () => {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const scrollContainer = document.getElementById("scroll-container");

    const mediaTablet = window.matchMedia(media.tablet);
    const mediaMobile = window.matchMedia(media.mobile);

    const handleScroll = () => {
      const scrollTop = (scrollContainer as HTMLElement)?.scrollTop ?? 0;
      const maxScroll = mediaMobile.matches
        ? 200
        : mediaTablet.matches
        ? 300
        : 600;
      const newOpacity = Math.max(1 - scrollTop / maxScroll, 0);

      setOpacity(newOpacity);
    };

    scrollContainer?.addEventListener("scroll", handleScroll);
    scrollContainer?.addEventListener("resize", handleScroll);
    return () => {
      scrollContainer?.removeEventListener("scroll", handleScroll);
      scrollContainer?.removeEventListener("resize", handleScroll);
    };
  }, []);

  return { opacity };
};

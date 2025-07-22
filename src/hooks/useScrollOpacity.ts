import { useEffect, useState } from "react";

export const useScrollOpacity = () => {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const scrollContainer = document.getElementById("scroll-container");

    const handleScroll = () => {
      const scrollTop = (scrollContainer as HTMLElement)?.scrollTop ?? 0;
      const maxScroll = 600;
      const newOpacity = Math.max(1 - scrollTop / maxScroll, 0);

      setOpacity(newOpacity);
    };

    scrollContainer?.addEventListener("scroll", handleScroll);
    return () => scrollContainer?.removeEventListener("scroll", handleScroll);
  }, []);

  return { opacity };
};

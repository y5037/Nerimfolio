import { Dispatch, SetStateAction, useEffect, useRef } from "react";

export const useResizeObserver = (
  setCanvasWidth: Dispatch<SetStateAction<number>>
) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    setCanvasWidth(containerRef.current.clientWidth);

    const resizeObserver = new ResizeObserver(() => {
      if (containerRef.current) {
        setCanvasWidth(containerRef.current.clientWidth);
      }
    });

    resizeObserver.observe(containerRef.current);

    return () => resizeObserver.disconnect();
  }, [setCanvasWidth]);

  return { containerRef };
};

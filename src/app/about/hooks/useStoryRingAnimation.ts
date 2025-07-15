import { Dispatch, SetStateAction, useEffect, useRef } from "react";

export const useStoryRingAnimation = (
  canvasWidth: number,
  setCanvasWidth: Dispatch<SetStateAction<number>>
) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const dpr = typeof window !== "undefined" ? window.devicePixelRatio : 1;

  useEffect(() => {
    if (!canvasRef.current) return;

    setCanvasWidth(canvasRef.current.clientWidth);

    const resizeObserver = new ResizeObserver(() => {
      if (canvasRef.current) {
        setCanvasWidth(canvasRef.current.clientWidth);
      }
    });

    resizeObserver.observe(canvasRef.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, [setCanvasWidth]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !canvasWidth) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = canvasWidth * dpr;
    canvas.height = canvasWidth * dpr;
    canvas.style.width = `${canvasWidth}px`;
    canvas.style.height = `${canvasWidth}px`;
    ctx.scale(dpr, dpr);

    let arcAngle = 0;
    let arcLength = 0;

    const draw = () => {
      ctx.clearRect(0, 0, canvasWidth, canvasWidth);
      const gradient = ctx.createLinearGradient(canvasWidth, 0, 0, canvasWidth);
      gradient.addColorStop(0, "#f09433");
      gradient.addColorStop(0.25, "#D413FF");
      gradient.addColorStop(0.35, "#dc2743");
      gradient.addColorStop(0.75, "#e6683c");
      gradient.addColorStop(0.8, "#FFDF3F");
      gradient.addColorStop(1, "#bc1888");
      ctx.strokeStyle = gradient;
      ctx.lineWidth = 6;
      ctx.lineJoin = "round";

      const cx = canvasWidth / 2;
      const cy = canvasWidth / 2;
      const r = canvasWidth / 2 - 6;

      for (let i = 0; i < 44; i += 2) {
        const start = 2 * Math.PI * (arcAngle + 0.0005 * 35 * i);
        const end =
          2 *
          Math.PI *
          (arcAngle + 0.0005 * (35 * i + (5 + arcLength) * (i / 4 + 1)));
        ctx.beginPath();
        ctx.arc(cx, cy, r, start, end);
        ctx.stroke();
      }
    };

    const animate = () => {
      arcAngle += 0.008;
      if (arcAngle > 0.3) arcLength += 0.8;
      draw();
      if (arcAngle < 1) requestAnimationFrame(animate);
    };

    animate();
  }, [canvasWidth, dpr]);

  return { canvasRef };
};

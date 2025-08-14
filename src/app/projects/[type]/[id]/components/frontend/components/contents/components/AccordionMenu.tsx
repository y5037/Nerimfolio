import { useRef, useEffect } from "react";

type AccordionItemProps = {
  i: number;
  isOpen: boolean;
  contentRefs: React.RefObject<(HTMLDivElement | null)[]>;
  children: React.ReactNode;
  duration?: number;
};

export default function AccordionItem({
  i,
  isOpen,
  contentRefs,
  children,
  duration = 500,
}: AccordionItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    if (!ref.current) return;
    contentRefs.current[i] = ref.current;

    const element = ref.current;

    requestAnimationFrame(() => {
      const startHeight = element.clientHeight;
      const targetHeight = isOpen ? element.scrollHeight : 0;
      const heightDiff = targetHeight - startHeight;
      const startTime = performance.now();

      if (frameRef.current) cancelAnimationFrame(frameRef.current);

      const animate = (time: number) => {
        const elapsed = time - startTime;
        const progress = Math.min(elapsed / duration, 1);
        element.style.height = startHeight + heightDiff * progress + "px";

        if (progress < 1) {
          frameRef.current = requestAnimationFrame(animate);
        } else {
          element.style.height = isOpen ? "auto" : "0px";
        }
      };

      frameRef.current = requestAnimationFrame(animate);
    });

    const observer = new ResizeObserver(() => {
      if (isOpen && ref.current) {
        ref.current.style.height = ref.current.scrollHeight + "px";
      }
    });
    observer.observe(element);

    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
      observer.disconnect();
    };
  }, [isOpen, children, duration, i, contentRefs]);

  return (
    <div
      ref={ref}
      className="duration-500 ease-out"
      style={{
        overflow: "hidden",
        height: "0px",
      }}
    >
      {children}
    </div>
  );
}

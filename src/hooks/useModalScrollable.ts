import { ReactNode, useEffect, useRef, useState } from "react";

export const useModalScrollable = (type: boolean, children: ReactNode) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [isScrollable, setIsScrollable] = useState(false);

  useEffect(() => {
    if (!type || !contentRef.current) return;

    const observer = new ResizeObserver(() => {
      if (contentRef.current) {
        const contentHeight = contentRef.current.scrollHeight;
        const viewportHeight = window.innerHeight;
        setIsScrollable(contentHeight > viewportHeight);
      }
    });

    observer.observe(contentRef.current);

    return () => observer.disconnect();
  }, [children, type]);

  return {contentRef, isScrollable}
};

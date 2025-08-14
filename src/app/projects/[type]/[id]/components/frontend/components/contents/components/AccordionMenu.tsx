import { useRef, useState, useLayoutEffect, useEffect } from "react";
import clsx from "clsx";

type AccordionItemProps = {
  i: number;
  isOpen: boolean;
  contentRefs: React.RefObject<(HTMLDivElement | null)[]>;
  children: React.ReactNode;
};

export default function AccordionMenu({
  i,
  isOpen,
  contentRefs,
  children,
}: AccordionItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useLayoutEffect(() => {
    if (ref.current) {
      setHeight(ref.current.scrollHeight);
      contentRefs.current[i] = ref.current;
    }
  }, [children]);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new ResizeObserver(() => {
      if (ref.current) setHeight(ref.current.scrollHeight);
    });
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [children]);

  return (
    <div
      ref={ref}
      className={clsx(
        "overflow-hidden transition-[max-height] duration-500 ease-out"
      )}
      style={{
        maxHeight: isOpen ? `${height}px` : "0px",
      }}
    >
      {children}
    </div>
  );
}

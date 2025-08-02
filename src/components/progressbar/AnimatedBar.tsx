"use client";

import { Line } from "rc-progress";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import clsx from "clsx";

export default function AnimatedBar({ value }: { value: number }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (inView) {
      const timeout = setTimeout(() => setProgress(value), 300);
      return () => clearTimeout(timeout);
    }
  }, [inView, value]);

  return (
    <div ref={ref} className={clsx("w-full")}>
      <Line
        percent={progress}
        strokeWidth={1}
        strokeColor="#3B82F6"
        trailColor="#374151"
        trailWidth={1}
        strokeLinecap="round"
      />
    </div>
  );
}

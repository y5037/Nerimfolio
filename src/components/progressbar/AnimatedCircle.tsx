import { ProgressItems } from "@/types/projects";
import clsx from "clsx";
import { useEffect, useState } from "react";
import {
  buildStyles,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";
import { useInView } from "react-intersection-observer";

export default function AnimatedCircle({ data }: { data: ProgressItems }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (inView) {
      let start = 0;
      const interval = setInterval(() => {
        start += 1;
        setProgress(start);
        if (start >= data.value) clearInterval(interval);
      }, 10);
    }
  }, [inView, data.value]);

  return (
    <div
      ref={ref}
      className={clsx("w-[120px] h-[120px]", "max-xs:w-[100px] h-[100px]")}
    >
      <CircularProgressbarWithChildren
        value={progress}
        styles={buildStyles({
          pathColor: data.pathColor,
          textColor: "#ffffff",
          trailColor: "#374151",
          strokeLinecap: "round",
        })}
      >
        <p className={clsx("text-center text-sm mt-1", "max-xs:text-xs")}>
          {data.text}
          <span className={clsx("block font-semibold")}>{data.value}%</span>
        </p>
      </CircularProgressbarWithChildren>
    </div>
  );
}

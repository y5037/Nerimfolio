"use client";

import { useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import { useResizeObserver } from "../../hooks/useResizeObserver";
import { useStoryRingAnimation } from "../../hooks/useStoryRingAnimation";
import Skeleton from "@/components/skeleton/Skeleton";

export default function StoryProfile({
  handleOpenStory,
}: {
  handleOpenStory: () => void;
}) {
  const [canvasWidth, setCanvasWidth] = useState(0);
  const [loadedMap, setLoadedMap] = useState(false);

  const { containerRef } = useResizeObserver(setCanvasWidth);
  const { canvasRef } = useStoryRingAnimation(canvasWidth, setCanvasWidth);

  return (
    <div
      ref={containerRef}
      className={clsx(
        "relative w-[150px] min-w-[150px] h-[150px] rounded-full overflow-hidden cursor-pointer",
        "max-lg1050:w-[100px] max-lg1050:min-w-[100px] max-lg1050:h-[100px]",
        "max-xs500:w-[80px] max-xs500:min-w-[80px] max-xs500:h-[80px]"
      )}
      onClick={handleOpenStory}
    >
      <canvas
        ref={canvasRef}
        className={clsx("absolute inset-0 w-full h-full z-10")}
      />
      <div
        className={clsx(
          "absolute inset-0 w-[91%] h-[91%] rounded-full overflow-hidden",
          "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
          "max-lg1050:w-[88%] max-lg1050:h-[88%]"
        )}
      >
        <Image
          src="/images/about/profile.jpg"
          alt="Profile"
          fill
          onLoad={() => setLoadedMap(true)}
          className={clsx(
            "object-cover",
            loadedMap ? "opacity-100" : "opacity-0"
          )}
        />
        {!loadedMap && <Skeleton />}
      </div>
    </div>
  );
}

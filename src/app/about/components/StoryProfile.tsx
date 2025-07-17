"use client";

import { useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import { useResizeObserver } from "../hooks/useResizeObserver";
import { useStoryRingAnimation } from "../hooks/useStoryRingAnimation";
import StoryCubeSlider from "./StoryCubeSlider";

export default function StoryProfile({
  handleOpenStory,
  showModal,
  modalType,
  close,
}: {
  handleOpenStory: () => void;
  showModal: boolean;
  modalType: "story" | "qr" | null;
  close: () => void;
}) {
  const [canvasWidth, setCanvasWidth] = useState(0);

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
        className={clsx("absolute inset-0 w-full h-full")}
      />
      <div
        className={clsx(
          "absolute inset-0 rounded-full overflow-hidden flex items-center justify-center"
        )}
      >
        <Image
          src="/images/about/profile.jpg"
          alt="Profile"
          width={0}
          height={0}
          sizes="100%"
          className={clsx(
            "rounded-full w-[91%] h-[91%] object-cover",
            "max-lg1050:w-[88%] max-lg1050:h-[88%]"
          )}
        />
      </div>
      {showModal && modalType === "story" && (
        <StoryCubeSlider isClose={close} />
      )}
    </div>
  );
}

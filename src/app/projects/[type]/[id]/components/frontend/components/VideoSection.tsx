"use client";

import clsx from "clsx";
import CustomVideoPlayer from "./CustomVideoPlayer";

export default function VideoSection() {
  return (
    <div className={clsx("aspect-video")}>
      <CustomVideoPlayer />
    </div>
  );
}

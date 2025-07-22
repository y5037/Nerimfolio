"use client";

import clsx from "clsx";
import CustomVideoPlayer from "./CustomVideoPlayer";

export default function VideoContainer() {
  return (
    <div className={clsx("aspect-video")}>
      <CustomVideoPlayer />
    </div>
  );
}

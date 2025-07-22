import clsx from "clsx";
import CustomVideoPlayer from "./CustomVideoPlayer";
import { useScrollOpacity } from "@/hooks/useScrollOpacity";

export default function VideoSection() {
  const { opacity } = useScrollOpacity();

  return (
    <div className={clsx("transition-opacity ease-in-out")} style={{ opacity }}>
      <div className={clsx("aspect-video")}>
        <CustomVideoPlayer />
      </div>
    </div>
  );
}

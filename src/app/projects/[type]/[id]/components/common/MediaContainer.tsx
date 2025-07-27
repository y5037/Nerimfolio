import clsx from "clsx";
import CustomVideoPlayer from "../frontend/components/CustomVideoPlayer";
import { useScrollOpacity } from "@/hooks/useScrollOpacity";
import Thumbnail from "../publishing/components/Thumbnail";

export default function MediaContainer({ type }: { type: string }) {
  const { opacity } = useScrollOpacity();

  return (
    <div className={clsx("transition-opacity ease-in-out")} style={{ opacity }}>
      <div
        className={clsx(
          "aspect-video",
          type !== "frontend" && "relative rounded-lg overflow-hidden"
        )}
      >
        {type === "frontend" ? <CustomVideoPlayer /> : <Thumbnail />}
      </div>
    </div>
  );
}

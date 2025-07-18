import clsx from "clsx";
import { motion } from "framer-motion";

export default function StoryProgressBar({
  loadingBar,
}: {
  loadingBar: number;
}) {
  return (
    <div className={clsx("absolute w-full h-[4px] z-[100]")}>
      <div className={clsx("loading-bar h-full")}>
        <motion.div
          initial={{ height: "100%", scaleX: 0 }}
          animate={{ scaleX: loadingBar }}
          transition={{ ease: "linear", duration: 0 }}
          style={{
            originX: 0,
            height: "100%",
            background: "rgba(255,255,255,.4)",
          }}
        />
      </div>
    </div>
  );
}

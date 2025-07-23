import clsx from "clsx";
import Overview from "./contents/Overview";
import { DetailTab } from "@/app/projects/types";
import { AnimatePresence, motion } from "framer-motion";

export default function ContentsContainer({ isActive }: DetailTab) {
  return (
    <div
      className={clsx(
        "flex-[1] flex-wrap rounded-md bg-black700 px-7 py-10 mb-[80px]",
        "max-lg:rounded-xl"
      )}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={isActive}
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 5 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          {isActive === "Overview" && <Overview />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

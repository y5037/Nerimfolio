import { AnimatePresence, motion } from "framer-motion";
import Builds from "./contents/Builds";
import Connect from "./contents/Connect";
import Intro from "./contents/Intro";

export default function ContentsContainer({
  isTab,
}: {
  isTab: "Intro" | "Builds" | "Connect";
}) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={isTab}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        {isTab === "Intro" ? (
          <Intro />
        ) : isTab === "Builds" ? (
          <Builds />
        ) : (
          <Connect />
        )}
      </motion.div>
    </AnimatePresence>
  );
}

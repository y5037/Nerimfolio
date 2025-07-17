import { clsx } from "clsx";
import { AnimatePresence, motion } from "framer-motion";

export default function StoryContent({ $story1 }: { $story1?: boolean }) {
  return (
    <>
      {$story1 && (
        <>
          <AnimatePresence mode="wait">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <p>
                <span
                  className={clsx("text-xl mb-1 inline-block font-semibold")}
                >
                  집중하는 시간,
                </span>
                <br />제 곁엔 늘 두 고양이가 있어요.
                <br className={clsx("mt-2 block")} />
                일과를 마치고 침실로 향하면, 조용히 제 뒤를 따라와요.
                <br />
              </p>
              <p className={clsx("mt-2 text-lg")}>
                그렇게 매일 우리는 하루를 함께 마무리합니다.
              </p>
            </motion.div>
          </AnimatePresence>
        </>
      )}
    </>
  );
}

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
              <p className={clsx("max-md:text-sm")}>
                <span
                  className={clsx(
                    "text-xl mb-1 inline-block font-semibold",
                    "max-md:text-lg"
                  )}
                >
                  집중하는 시간,
                </span>
                <br />제 곁엔 늘 두 고양이가 있어요. 각자의 할 일을 존중하죠.
                <br className={clsx("mt-2 block")} />
                일과를 마치고 침실로 향하면, 조용히 제 뒤를 따라와요.
                <br />
              </p>
              <p className={clsx("mt-2 text-lg", "max-md:text-sm")}>
                우리는 정해진 패턴으로 매일을 함께 합니다.
              </p>
            </motion.div>
          </AnimatePresence>
        </>
      )}
    </>
  );
}

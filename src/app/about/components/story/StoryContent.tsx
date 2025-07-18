import { clsx } from "clsx";
import { AnimatePresence, motion } from "framer-motion";

export default function StoryContent({
  $story1,
  $story2,
  $story3,
  $story4,
}: {
  $story1?: boolean;
  $story2?: boolean;
  $story3?: boolean;
  $story4?: boolean;
}) {
  return (
    <>
      {$story1 ? (
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
                    "text-xl mb-2 inline-block font-semibold",
                    "max-md:text-lg"
                  )}
                >
                  집중하는 시간,
                </span>
                <br />
                하루 중 가장 에너지가 빠르게 흐를 때,
                <br />그 곁엔 늘 두 고양이가 공존한다. 서로 각자의 할 일을
                존중하면서.
                <br />
                일과를 마치고 침실로 향하면, 조용히 내 뒤를 따라온다.
                <br />
              </p>
              <p className={clsx("mt-2 text-lg", "max-md:text-sm")}>
                우리는 매일 같은 패턴으로 하루를 함께 하고 있다.
              </p>
            </motion.div>
          </AnimatePresence>
        </>
      ) : $story2 ? (
        <>
          <p className={clsx("max-md:text-sm")}>
            <span
              className={clsx(
                "text-xl mb-2 inline-block font-semibold",
                "max-md:text-lg"
              )}
            >
              매주 금요일 오후 4시,
            </span>
            <span className="max-md:block"> 우리는 다시 줌으로 모였다.</span>
            <br className="max-md:hidden" />
            각자 작업한 내용을 공유하고, 함께 이슈를 해결하기 위해.
            <br />
            프로젝트는 느리고 시행착오의 연속이었지만,
            <br />
          </p>
          <p className={clsx("mt-3 text-lg", "max-md:text-sm")}>
            <span className="block">아무렴 어때!</span>
            분명하게 앞으로 나아갔고 결국 결과물도 만들어냈다.
          </p>
        </>
      ) : $story3 ? (
        <>
          <p className={clsx("max-md:text-sm")}>
            <span
              className={clsx(
                "text-xl mb-2 inline-block font-semibold",
                "max-md:text-lg"
              )}
            >
              긴 하루의 끝엔, 작은 보상이 기다린다.
            </span>
            <br />
            하루 종일 코드를 들여다보다 보면 어느새 해가 진다.
            <br />
            책상 옆 두 고양이의 소리 없는 보챔이 시작되면,
            <br />
          </p>
          <p className={clsx("mt-3 text-lg", "max-md:text-sm")}>
            그제야 마지막 커밋을 남기고 맥주 한 캔을 딴다. 🍺
          </p>
        </>
      ) : $story4 ? (
        <>
          <p className={clsx("max-md:text-sm")}>
            <span
              className={clsx(
                "text-xl mb-2 inline-block font-semibold",
                "max-md:text-lg"
              )}
            >
              오늘도 시작,
            </span>
            <br />
            출근으로 하루를 시작하는 이들 사이로 나는 걷고, 또 뛴다.
            <br />
            전날 해결하지 못한 코드가 머릿 속에 남게 되면,
            <br />
            내내 여러 방식으로 고민하다 나도 모르게 발걸음을 재촉한다.
          </p>
          <p className={clsx("mt-3 text-lg", "max-md:text-sm")}>
            돌아와서 코드를 열어보면,
            <span className="block">거짓말처럼 금방 해결될 때가 많다.</span>
          </p>
        </>
      ) : (
        ""
      )}
    </>
  );
}

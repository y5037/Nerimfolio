import { ContributionData } from "@/types/projects";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function ContributionSection({
  contributionData,
}: {
  contributionData: ContributionData[];
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };
  const target = contributionData.find((me) =>
    me.name.toString().includes("윤혜림")
  );

  return (
    <div className={clsx("space-y-6")}>
      {contributionData.map((m, idx) => (
        <div
          key={m.name}
          className={clsx(
            "p-4 rounded-2xl border border-solid backdrop-blur",
            target?.name === m.name
              ? "border-[rgba(255,255,255,0)] bg-[rgba(0,0,0,.1)]"
              : "border-[rgba(255,255,255,.1)] bg-[rgba(255,255,255,.1)]"
          )}
        >
          <button
            onClick={() => toggle(idx)}
            className={clsx("w-full flex justify-between items-center")}
          >
            <div>
              <p className={clsx("text-base font-semibold text-white")}>
                {m.name}
              </p>
              <p className={clsx("text-sm text-[rgba(255,255,255,.7)]")}>
                {m.summary}
              </p>
            </div>
            <div className={clsx("w-5 h-5 min-w-5 ml-2")}>
              <ChevronDown
                className={clsx(
                  "absolute right-3 w-5 h-5 transition-transform",
                  openIndex === idx ? "rotate-180" : ""
                )}
              />
            </div>
          </button>
          <AnimatePresence initial={false}>
            {openIndex === idx && (
              <motion.div
                key="details"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className={clsx("overflow-hidden")}
              >
                <div
                  className={clsx(
                    "mt-5 p-6 rounded-2xl border border-solid border-[rgba(255,255,255,.3)] space-y-1 text-[rgba(255,255,255,.8)] text-sm"
                  )}
                >
                  {m.details.map((d, i) => {
                    const isLast = i === m.details.length - 1;
                    return (
                      <div key={i} className={clsx("flex gap-2")}>
                        <span>{isLast ? "└" : "├"}</span>
                        <span>{d}</span>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

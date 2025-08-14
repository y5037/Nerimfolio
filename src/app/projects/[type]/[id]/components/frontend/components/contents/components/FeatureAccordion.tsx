import { useModalController } from "@/hooks/useModalController";
import { FeatureData } from "@/types/projects";
import clsx from "clsx";
import { ChevronDown } from "lucide-react";
import { Dispatch, SetStateAction, useRef, useState } from "react";
import ScreenshotModal from "../../../../common/ScreenshotModal";
import FeatureContent from "./FeatureContent";

export default function FeatureAccordion({
  paramsId,
  groupId,
  openGroup,
  setOpenGroup,
  features,
}: {
  paramsId: number;
  groupId: "commonUI" | "pageFeatures";
  openGroup: "commonUI" | "pageFeatures" | null;
  setOpenGroup: Dispatch<SetStateAction<"commonUI" | "pageFeatures" | null>>;
  features: FeatureData[];
}) {
  const [isScreenshot, setIsScreenshot] = useState("");
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  const { showModal, isVisible, open, close, handleExitComplete } =
    useModalController();

  return (
    <>
      {showModal && (
        <ScreenshotModal
          $frontendFeature
          imgSrc={isScreenshot}
          controller={{ isVisible, close, handleExitComplete }}
        />
      )}
      <div className={clsx("space-y-3")}>
        {features.map((feature, i) => {
          const isOpen = groupId === openGroup && openIndex === i;

          const handleClickToggle = () => {
            setOpenGroup(groupId);
            setOpenIndex(isOpen ? null : i);
          };

          return (
            <div
              key={i}
              className={clsx(
                "relative bg-white/60 rounded-xl overflow-hidden border border-solid border-[rgba(255,255,255,.1)]"
              )}
            >
              <button
                onClick={() => handleClickToggle()}
                className={clsx(
                  "w-full flex items-center justify-between box-border px-6 py-4 text-left text-white hover:bg-[rgba(0,0,0,.2)] transition",
                  isOpen && "bg-[rgba(0,0,0,.2)]"
                )}
              >
                <div className={clsx("flex items-center gap-3 mr-3")}>
                  <h3 className={clsx("text-[16px] font-medium")}>
                    {feature.title}
                  </h3>
                  {paramsId !== 2 &&
                    (feature.implementedByMe ? (
                      <span
                        className={clsx(
                          "inline-block min-w-fit text-xs px-2 py-1 rounded-full bg-violet-900 text-violet-200 border border-solid border-violet-500 bg-opacity-80"
                        )}
                      >
                        담당
                      </span>
                    ) : feature.contributionPercent > 0 ? (
                      <span
                        className={clsx(
                          "inline-block min-w-fit text-xs px-2 py-1 rounded-full bg-teal-900 text-teal-200 border border-solid border-teal-500 bg-opacity-80"
                        )}
                      >
                        기여 ({feature.contributionPercent}%)
                      </span>
                    ) : null)}
                </div>
                <div>
                  <ChevronDown
                    className={clsx(
                      "w-5 h-5 transition-transform",
                      isOpen ? "rotate-180" : ""
                    )}
                  />
                </div>
              </button>
              <FeatureContent
                i={i}
                feature={feature}
                isOpen={isOpen}
                contentRefs={contentRefs}
                setIsScreenshot={setIsScreenshot}
                modalOpen={open}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}

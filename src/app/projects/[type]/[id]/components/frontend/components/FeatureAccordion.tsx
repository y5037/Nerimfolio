import { useModalController } from "@/hooks/useModalController";
import { FeatureData } from "@/types/projects";
import clsx from "clsx";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { Dispatch, SetStateAction, useRef, useState } from "react";
import ScreenshotModal from "../../common/ScreenshotModal";

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
      <div className="space-y-3">
        {features.map((feature, i) => {
          const isOpen = groupId === openGroup && openIndex === i;

          const handleClickToggle = () => {
            setOpenGroup(groupId);
            setOpenIndex(isOpen ? null : i);
          };

          return (
            <div
              key={i}
              className="relative bg-gray-800/60 rounded-xl overflow-hidden border border-gray-700"
            >
              <button
                onClick={() => handleClickToggle()}
                className={clsx(
                  "w-full flex items-center justify-between px-6 py-4 text-left text-white hover:bg-gray-700/40 transition",
                  isOpen && "bg-gray-700/40"
                )}
              >
                <div className="flex items-center gap-3">
                  <h3 className="text-[16px] font-medium">{feature.title}</h3>
                  {paramsId !== 2 &&
                    (feature.implementedByMe ? (
                      <span className="text-xs px-2 py-1 rounded-full bg-sky-900 text-sky-200 border border-sky-500">
                        담당
                      </span>
                    ) : feature.contributionPercent > 0 ? (
                      <span className="text-xs px-2 py-1 rounded-full bg-emerald-900 text-emerald-200 border border-emerald-500">
                        기여 ({feature.contributionPercent}%)
                      </span>
                    ) : null)}
                </div>
                <ChevronDown
                  className={`absolute right-3 w-5 h-5 transition-transform ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                ref={(el) => {
                  contentRefs.current[i] = el;
                }}
                className="transition-[max-height] duration-500 overflow-hidden"
                style={{
                  maxHeight: isOpen
                    ? contentRefs.current[i]?.scrollHeight + "px"
                    : "0px",
                }}
              >
                <div className="px-6 py-6 text-gray-300">
                  <div className={clsx("space-y-0.5 mb-6")}>
                    {feature.description.map((text, idx) => (
                      <p key={idx} className={clsx("text-sm")}>
                        {text}
                      </p>
                    ))}
                  </div>
                  <div className={clsx("space-y-8")}>
                    {feature.image && (
                      <Image
                        src={feature.image}
                        alt={`${feature.title}`}
                        width={800}
                        height={0}
                        className="w-full rounded-md border border-gray-600  object-cover cursor-pointer"
                        onClick={() => {
                          open();
                          setIsScreenshot(feature.image);
                        }}
                      />
                    )}
                    <div>
                      <h4 className="text-sm font-medium text-gray-400">
                        ✅ 사용 기술
                      </h4>
                      <ul className="list-disc list-inside text-sm">
                        {feature.tech.map((t, i) => (
                          <li key={i}>{t}</li>
                        ))}
                      </ul>
                    </div>
                    {feature.ux && feature.ux.length > 0 && (
                      <div>
                        <h4 className="text-sm font-medium text-gray-400">
                          🎨 UI/UX 고려사항
                        </h4>
                        <ul className="list-disc list-inside text-sm mt-1">
                          {feature.ux.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {feature.contributionDetails &&
                      feature.contributionDetails.length > 0 && (
                        <div>
                          <h4 className="text-sm font-medium text-gray-400">
                            🧩 기여 상세 내역
                          </h4>
                          <ul className="list-disc list-inside text-sm mt-1">
                            {feature.contributionDetails.map((item, i) => (
                              <li key={i}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    <div>
                      <h4 className="text-sm font-medium text-gray-400 mb-3">
                        📊 기능 기여도
                        {feature.contributionNote && (
                          <span className="ml-1 text-xs font-light text-gray300 relative top-[-1px]">
                            ( * 기존 담당자의 중도 이탈로, 해당 페이지의
                            전반적인 구현 및 마무리 작업을 단독으로 맡아
                            수행하였습니다)
                          </span>
                        )}
                      </h4>

                      <div className="mt-1 w-full bg-gray-700 h-3 rounded-full">
                        <div
                          className="bg-blue-500 h-full rounded-full transition-all"
                          style={{ width: `${feature.contributionPercent}%` }}
                        />
                      </div>
                      <div className="text-xs text-right text-gray-400 mt-1">
                        {feature.contributionPercent}%
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

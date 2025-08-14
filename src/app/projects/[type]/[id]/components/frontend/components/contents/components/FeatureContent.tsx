import { featuresSemiTitle, featuresUl } from "@/app/projects/styles";
import AnimatedBar from "@/components/progressbar/AnimatedBar";
import { FeatureData } from "@/types/projects";
import clsx from "clsx";
import Image from "next/image";
import { Dispatch, RefObject, SetStateAction } from "react";
import AccordionMenu from "./AccordionMenu";

export default function FeatureContent({
  i,
  feature,
  contentRefs,
  isOpen,
  setIsScreenshot,
  modalOpen,
}: {
  i: number;
  feature: FeatureData;
  contentRefs: RefObject<(HTMLDivElement | null)[]>;
  isOpen: boolean;
  setIsScreenshot: Dispatch<SetStateAction<string>>;
  modalOpen: () => void;
}) {
  return (
    <AccordionMenu i={i} isOpen={isOpen} contentRefs={contentRefs}>
      <div className={clsx("px-6 py-6 text-gray-300 bg-gray-950")}>
        <div className={clsx("mb-6")}>
          <p className={clsx("text-sm whitespace-pre-line")}>
            {feature.description}
          </p>
        </div>
        <div className={clsx("space-y-8")}>
          {feature.image && (
            <Image
              src={feature.image}
              alt={`${feature.title}`}
              width={800}
              height={0}
              className={clsx("w-full rounded-md object-cover cursor-pointer")}
              onClick={() => {
                modalOpen();
                setIsScreenshot(feature.image);
              }}
            />
          )}
          <div>
            <h4 className={clsx(featuresSemiTitle)}>✅ 사용 기술</h4>
            <ul className={clsx(featuresUl)}>
              {feature.tech.map((t, i) => (
                <li key={i}>{t}</li>
              ))}
            </ul>
          </div>
          {feature.ux && feature.ux.length > 0 && (
            <div>
              <h4 className={clsx(featuresSemiTitle)}>🎨 UI/UX 고려사항</h4>
              <ul className={clsx(featuresUl)}>
                {feature.ux.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          )}
          {feature.contributionDetails &&
            feature.contributionDetails.length > 0 && (
              <div>
                <h4 className={clsx(featuresSemiTitle)}>🧩 기여 상세 내역</h4>
                <ul className={clsx(featuresUl)}>
                  {feature.contributionDetails.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
          <div>
            <h4 className={clsx(featuresSemiTitle, "mb-3")}>
              📊 기능 기여도
              {feature.contributionNote && (
                <span
                  className={clsx(
                    "ml-1 text-xs font-light text-gray300 relative top-[-1px]"
                  )}
                >
                  ( * 기존 담당자의 중도 이탈로, 해당 페이지의 전반적인 구현 및
                  마무리 작업을 단독으로 맡아 수행하였습니다)
                </span>
              )}
            </h4>
            <div className={clsx("mt-1 w-full rounded-full")}>
              <AnimatedBar value={feature.contributionPercent} />
            </div>
            <div className={clsx("text-xs text-right text-gray-400 mt-1")}>
              {feature.contributionPercent}%
            </div>
          </div>
        </div>
      </div>
    </AccordionMenu>
  );
}

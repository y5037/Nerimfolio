import { featuresData } from "@/data/projects/detail/features";
import { useState } from "react";
import FeatureAccordion from "./components/FeatureAccordion";
import { useParamsId } from "@/utils/getParamsId";
import clsx from "clsx";
import { Puzzle, WrenchIcon } from "lucide-react";

export default function Features() {
  const [openGroup, setOpenGroup] = useState<
    "commonUI" | "pageFeatures" | null
  >(null);

  const paramsId = useParamsId();
  const featureData = featuresData.find((item) => {
    return item.id === paramsId;
  });
  const commonUIFeatures =
    featureData?.featureGroups.find((group) => group.groupName === "공통 UI")
      ?.features ?? [];
  const pageFeatures =
    featureData?.featureGroups.find(
      (group) => group.groupName === "페이지별 기능"
    )?.features ?? [];

  return (
    <section id="features">
      <div
        className={clsx("mb-12 pl-5 border-solid border-l-4 border-teal-400")}
      >
        <h2 className={clsx("text-2xl font-bold mb-3")}>주요 기능 상세 설명</h2>
        <p className={clsx("text-sm text-gray-400 font-light")}>
          담당하거나 기여한 핵심 기능들을 기술 스택과 함께 구조적으로
          정리했습니다.
        </p>
      </div>
      <section className={clsx("mb-10")}>
        <h3
          className={clsx("flex items-center text-base mb-3 ml-2 text-gray400")}
        >
          <Puzzle className={clsx("w-4 h-4 mr-2")} />
          공통 UI / 전역 컴포넌트
        </h3>
        <FeatureAccordion
          paramsId={paramsId}
          groupId="commonUI"
          openGroup={openGroup}
          setOpenGroup={setOpenGroup}
          features={commonUIFeatures}
        />
      </section>
      <section>
        <h3
          className={clsx("flex items-center text-base mb-3 ml-2 text-gray400")}
        >
          <WrenchIcon className={clsx("w-4 h-4 mr-2")} />
          페이지별 기능
        </h3>
        <FeatureAccordion
          paramsId={paramsId}
          groupId="pageFeatures"
          openGroup={openGroup}
          setOpenGroup={setOpenGroup}
          features={pageFeatures}
        />
      </section>
    </section>
  );
}

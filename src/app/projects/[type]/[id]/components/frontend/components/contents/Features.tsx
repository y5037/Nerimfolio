import { featuresData } from "@/data/projects/detail/features";
import { useState } from "react";
import FeatureAccordion from "./components/FeatureAccordion";
import { useParamsId } from "@/utils/getParamsId";
import clsx from "clsx";

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
      <div className={clsx("mb-10")}>
        <h2 className={clsx("text-2xl font-bold mb-2")}>주요 기능 상세 설명</h2>
        <p className={clsx("text-gray-400 font-light")}>
          담당 기능과 기여한 기능의 핵심 내용을 기술 스택과 함께 소개합니다.
        </p>
      </div>
      <section className={clsx("mb-8")}>
        <h3
          className={clsx(
            "flex items-center text-lg font-medium mb-3 ml-2 text-gray400"
          )}
        >
          <div className={clsx("w-2 h-2 bg-gray400 mr-2")} />
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
          className={clsx(
            "flex items-center text-lg font-medium mb-3 ml-2 text-gray400"
          )}
        >
          <div className={clsx("w-2 h-2 bg-gray400 mr-2")} />
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

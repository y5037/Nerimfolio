"use client";

import clsx from "clsx";
import {
  buildsStackEmoji,
  buildsSection,
  buildsStackWrap,
  buildsTitle,
  tabContentsWrap,
  buildsULList,
  buildsStackList,
} from "../../styles";
import { techStack, tools } from "@/lib/constants/aboutTechStacks";

export default function Builds() {
  return (
    <div
      className={clsx(
        "space-y-16 max-w-4xl mx-auto px-4",
        "max-md:space-y-12",
        tabContentsWrap
      )}
    >
      <section className={clsx(buildsSection)}>
        <h2 className={clsx("border-orange-500", buildsTitle)}>
          🛠️ Primary Tech Stack
        </h2>
        <ul className={clsx(buildsStackWrap)}>
          {techStack.map(({ name, emoji, bg }) => (
            <li key={name} className={clsx("py-1.5", buildsStackList, bg)}>
              <span className={clsx(buildsStackEmoji)}>{emoji}</span>
              <span>{name}</span>
            </li>
          ))}
        </ul>
      </section>
      <section className={clsx(buildsSection)}>
        <h2 className={clsx("border-purple-500", buildsTitle)}>
          🧰 Favorite Tools & Libraries
        </h2>
        <p className={clsx("text-gray-400 mb-4")}>
          프로젝트에 감성을 더하거나, 개발 속도를 높이는 데 자주 사용하는
          도구들이에요.
        </p>
        <ul className={clsx(buildsStackWrap)}>
          {tools.map(({ name, emoji, bg }) => (
            <li key={name} className={clsx("py-2", buildsStackList, bg)}>
              <span className={clsx(buildsStackEmoji)}>{emoji}</span>
              <span>{name}</span>
            </li>
          ))}
        </ul>
      </section>
      <section className={clsx(buildsSection)}>
        <h2 className={clsx("border-green-500", buildsTitle)}>
          🤝 Collaboration Tools
        </h2>
        <ul className={clsx(buildsULList)}>
          <li>Git & GitHub으로 소스 버전 및 이슈 관리</li>
          <li>Figma를 통한 디자이너와의 원활한 협업</li>
          <li>Notion, Zeplin 등을 활용한 업무 정리 및 커뮤니케이션 경험</li>
        </ul>
      </section>
      <section className={clsx(buildsSection)}>
        <h2 className={clsx("border-pink-500", buildsTitle)}>
          ✨ My Way of Building
        </h2>
        <ul className={clsx(buildsULList)}>
          <li>직접 커스텀 훅을 만들어 코드 재사용성과 가독성을 높입니다</li>
          <li>퍼블리셔 경험 덕분에 디자이너-개발자 간 소통에 강점이 있어요</li>
          <li>정해진 틀에만 얽매이지 않고, 더 나은 방향을 고민하며 작업해요</li>
          <li>
            작은 UI 디테일까지 신경 써서, 사용자 경험을 향상시키는 데 집중합니다
          </li>
        </ul>
      </section>
    </div>
  );
}

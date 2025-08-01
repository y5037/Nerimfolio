import { Card, CardContent } from "@/components/ui/card";
import TechDecisionCard from "./components/TechDecisionCard";
import { frontendTechStackData } from "@/data/projects/detail/techStack";
import { getParamsId } from "@/utils/getParamsId";
import clsx from "clsx";

export default function TechStack() {
  const paramsId = getParamsId();
  const data = frontendTechStackData.find((item) => {
    return item.id === paramsId;
  });

  const techStack =
    data?.techStackGroups.find(
      (group) => group.groupName === "Tech Stack Choice"
    )?.techStack ?? [];

  const directory =
    data?.techStackGroups.find(
      (group) => group.groupName === "Directory Architecture"
    )?.directory ?? [];

  if (!data) return;
  return (
    <>
      <section
        className={clsx(
          "space-y-10 text-sm leading-relaxed text-neutral-300 max-w-4xl mx-auto"
        )}
      >
        <Card
          className={clsx(
            "bg-neutral-900 border-neutral-700 rounded-2xl shadow-md border border-solid border-gray-500/40"
          )}
        >
          <CardContent className={clsx("p-6")}>
            <div
              className={clsx(
                "mb-10 pl-5 border-solid border-l-4 border-pink-400"
              )}
            >
              <span
                className={clsx(
                  "uppercase tracking-wider text-xs text-pink-400"
                )}
              >
                Tech Stack Choice
              </span>
              <h2 className={clsx("text-xl font-bold text-neutral-100 mt-1")}>
                기술 선택 배경
              </h2>
            </div>
            <div className={clsx("space-y-6")}>
              {techStack.map((item, idx) => (
                <TechDecisionCard key={idx} data={item} />
              ))}
            </div>
          </CardContent>
        </Card>
        <Card
          className={clsx(
            "bg-neutral-900 border-neutral-700 rounded-2xl shadow-md border border-solid border-gray-500/40"
          )}
        >
          <CardContent className={clsx("p-6")}>
            <div
              className={clsx("pl-5 border-solid border-l-4 border-indigo-400")}
            >
              <span
                className={clsx(
                  "uppercase tracking-wider text-xs text-indigo-400"
                )}
              >
                Directory Architecture
              </span>
              <h3
                className={clsx(
                  "text-xl font-semibold text-neutral-100 mt-1 mb-3"
                )}
              >
                디렉토리 구조 설계
              </h3>
            </div>
            <p className={clsx("text-neutral-400 mb-8")}>
              실제 서비스 환경을 가정하여, 채용자(Owner)와 지원자(Applicant)의
              UI 및 흐름 차이를 명확히 반영하기 위해 역할별로 분리했습니다.
              <br />
              이렇게 분리함으로써 유지보수성을 높이고, 협업 과정에서 컴포넌트 간
              의존성을 최소화하여 효율적인 개발이 가능하도록 설계했습니다.
            </p>
            <pre
              className={clsx(
                "bg-neutral-800/70 p-4 rounded-xl font-mono text-sm text-neutral-300 overflow-x-auto border border-solid border-gray-500/40"
              )}
            >
              {directory}
            </pre>
          </CardContent>
        </Card>
      </section>
    </>
  );
}

import { Card, CardContent } from "@/components/ui/card";
import TechDecisionCard from "./components/TechDecisionCard";
import { frontendTechStackData } from "@/data/projects/detail/techStack";
import { useParamsId } from "@/utils/getParamsId";
import clsx from "clsx";
import { TechStackData } from "@/types/projects";
import { ColorKey } from "@/lib/constants/techColors";

export default function TechStack() {
  const paramsId = useParamsId();
  const data = frontendTechStackData.find((item) => {
    return item.id === paramsId;
  });

  const groups = data?.techStackGroups ?? [];

  let techStack: (typeof groups)[number]["techStack"] = [];
  let description: string | undefined;
  let directory: string | undefined;

  for (const group of groups) {
    if (group.groupName === "Tech Stack Choice") {
      techStack = group.techStack ?? [];
    } else if (group.groupName === "Directory Architecture") {
      description = group.description ?? "";
      directory = group.directory ?? "";
    }
  }

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
          <CardContent className={clsx("px-6 py-10")}>
            <div
              className={clsx(
                "mb-8 pl-5 border-solid border-l-4 border-pink-400"
              )}
            >
              <span
                className={clsx(
                  "uppercase tracking-wider text-xs text-pink-400"
                )}
              >
                Tech Stack Choice
              </span>
              <h2 className={clsx("text-2xl font-bold text-neutral-100 mt-1")}>
                기술 선택 배경
              </h2>
            </div>
            <div className={clsx("space-y-6")}>
              {techStack.map((item, idx) => (
                <TechDecisionCard
                  key={idx}
                  data={item as TechStackData & { signatureColor: ColorKey }}
                />
              ))}
            </div>
          </CardContent>
        </Card>
        <Card
          className={clsx(
            "bg-neutral-900 border-neutral-700 rounded-2xl shadow-md border border-solid border-gray-500/40"
          )}
        >
          <CardContent className={clsx("px-6 py-10")}>
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
                  "text-2xl font-semibold text-neutral-100 mt-1 mb-3"
                )}
              >
                디렉토리 구조 설계
              </h3>
            </div>
            <p
              className={clsx("pl-3 text-neutral-400 mb-8 whitespace-pre-line")}
            >
              {description}
            </p>
            <pre
              className={clsx(
                "bg-neutral-800/70 p-6 rounded-xl font-mono text-sm text-gray200 overflow-x-auto border border-indigo-400/40 shadow-[0_0_10px_rgba(129,140,248,0.4)] "
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

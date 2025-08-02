import { TechStackData } from "@/types/projects";
import clsx from "clsx";

export default function TechDecisionCard({ data }: { data: TechStackData }) {
  return (
    <pre
      className={clsx(
        "bg-neutral-800/70 p-6 rounded-xl font-mono text-neutral-300 overflow-x-auto border border-solid border-gray-500/40 text-wrap"
      )}
    >
      <h3 className={clsx("text-base font-medium mb-3", data.titleColor)}>
        {data.title}
      </h3>
      <p className={clsx("text-sm text-neutral-400")}>{data.description}</p>
    </pre>
  );
}

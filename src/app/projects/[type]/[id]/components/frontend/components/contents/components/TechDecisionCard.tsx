import { ColorKey, colorMap } from "@/lib/constants/techColors";
import { TechStackData } from "@/types/projects";
import clsx from "clsx";

interface Props {
  data: TechStackData & { signatureColor: ColorKey };
}

export default function TechDecisionCard({ data }: Props) {
  return (
    <div
      className={clsx(
        "relative bg-black px-6 py-8 rounded-lg border border-pink-400/40 font-mono text-sm text-white shadow-[0_0_10px_rgba(249,168,212,0.3)] overflow-x-auto"
      )}
    >
      <h3
        className={clsx(
          "inline-block text-xs font-medium mb-4 tracking-widest uppercase border border-solid rounded-full px-5 py-2",
          colorMap[data.signatureColor]
        )}
      >
        {data.title}
      </h3>
      <pre
        className={clsx(
          "whitespace-pre-wrap pl-1 leading-relaxed tracking-wide text-gray200"
        )}
      >
        {data.description}
      </pre>
    </div>
  );
}

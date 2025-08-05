import { ToolData } from "@/types/projects";
import clsx from "clsx";
import Image from "next/image";

export default function ToolSection({ toolData }: { toolData: ToolData[] }) {
  return (
    <div className={clsx("grid grid-cols-2 lg900:grid-cols-4 gap-4")}>
      {toolData.map((t) => (
        <div
          key={t.name}
          className={clsx(
            "group flex flex-col items-center justify-center py-7"
          )}
        >
          <div
            className={clsx(
              "p-3 border border-solid border-[rgba(255,255,255,.5)] rounded-full bg-[rgba(0,0,0,.1)]"
            )}
          >
            <Image src={t.icon} alt={t.name} width={50} height={50} />
          </div>
          <p className={clsx("pt-3 pb-1 text-white font-semibold")}>{t.name}</p>
          <p className={clsx("text-xs text-white/70 text-center")}>{t.desc}</p>
        </div>
      ))}
    </div>
  );
}

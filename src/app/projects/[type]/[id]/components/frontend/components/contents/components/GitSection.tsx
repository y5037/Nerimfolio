import { GitData } from "@/types/projects";
import clsx from "clsx";
import Image from "next/image";
import React from "react";

export default function GitSection({ gitData }: { gitData: GitData[] }) {
  return (
    <div className={clsx("space-y-6")}>
      {gitData.map(({ imgUrl, contents }) => (
        <React.Fragment key={imgUrl}>
          <div className={clsx("relative w-fill h-[190px]")}>
            <Image src={imgUrl} alt="Gitflow" fill />
          </div>
          <div
            className={clsx("grid sm:grid-cols-3 gap-3 text-sm text-white/80")}
          >
            {contents.map((content, idx) => (
              <div
                key={idx}
                className={clsx(
                  "p-4 rounded-xl bg-[rgba(255,255,255,.1)] backdrop-blur space-y-1"
                )}
              >
                <p className={clsx("font-semibold text-white")}>
                  {content.title}
                </p>
                <p className={clsx("whitespace-pre-line")}>
                  {content.description}
                </p>
              </div>
            ))}
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}

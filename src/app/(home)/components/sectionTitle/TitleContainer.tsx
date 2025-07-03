import React from "react";
import { sectionMeta } from "./constants/sectionMeta";
import clsx from "clsx";

export default function TitleContainer({ id }: { id: string }) {
  return (
    <>
      {sectionMeta.map((item) => {
        return (
          <React.Fragment key={item.id}>
            {id === item.id && (
              <div id={item.id} className={clsx("mb-32 px-10", "max-md:px-6")}>
                <div className={clsx("text-center")}>
                  <p className={clsx("text-5xl font-roboto font-light mb-3")}>
                    {item.title}
                  </p>
                  <div
                    className={clsx(
                      "flex flex-wrap items-center justify-center gap-2 font-roboto font-light"
                    )}
                  >
                    {item.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </React.Fragment>
        );
      })}
    </>
  );
}

import React from "react";
import { sectionMeta } from "./constants/sectionMeta";

export default function TitleContainer({ id }: { id: string }) {
  return (
    <>
      {sectionMeta.map((item) => {
        return (
          <React.Fragment key={item.id}>
            {id === item.id && (
              <div id={item.id} className="mb-32">
                <div className="text-center">
                  <p className="text-5xl font-roboto font-light mb-3">
                    {item.title}
                  </p>
                  <div className="flex items-center justify-center gap-2 font-roboto font-light">
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

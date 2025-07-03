"use client";

import Image from "next/image";
import TitleContainer from "./sectionTitle/TitleContainer";
import { useState } from "react";
import Popup from "./popup/Popup";
import { slideImages } from "@/data/publishing";
import clsx from "clsx";

export default function PublishingSection() {
  const [activeIndex, setActiveIndex] = useState<string | null>(null);

  const slideMeta = [
    ...slideImages,
    ...slideImages,
    ...slideImages,
    ...slideImages,
  ];

  return (
    <>
      <TitleContainer id="Layouts" />
      <div className={clsx("group relative w-full")}>
        <div
          className={clsx(
            "flex w-max animate-slideLeft group-hover:[animation-play-state:paused]",
            activeIndex !== null ? "[animation-play-state:paused]" : ""
          )}
        >
          {slideMeta.map((image, idx) => {
            const uniqueKey = `${image.id}-${idx}`;
            return (
              <div
                key={uniqueKey}
                className={clsx(
                  "flex justify-center items-center w-[200px] h-[200px] mx-8 rounded-full flex-shrink-0 border border-solid border-gray-500 cursor-pointer transition-transform duration-200 ease",
                  "max-lg1050:w-[150px] max-lg1050:h-[150px]",
                  "max-xs500:w-25 max-xs500:h-25",
                  activeIndex === null && "lg900:hover:-translate-y-3"
                )}
                onClick={() =>
                  setActiveIndex((prev) =>
                    prev === uniqueKey ? null : uniqueKey
                  )
                }
              >
                <div
                  className={clsx(
                    "relative w-[120px] h-full object-cover",
                    "max-lg1050:w-[100px]"
                  )}
                >
                  <Image src={image.src} alt={`slide-${idx}`} fill />
                </div>
                {activeIndex === uniqueKey && (
                  <div
                    onClick={(e) => e.stopPropagation()}
                    className={clsx(
                      "absolute z-10 cursor-default hidden",
                      "md:block"
                    )}
                  >
                    <Popup onClose={() => setActiveIndex(null)} />
                  </div>
                )}
              </div>
            );
          })}
        </div>
        {activeIndex !== null && (
          <div
            onClick={(e) => e.stopPropagation()}
            className={clsx(
              "fixed inset-0 z-50 flex items-center justify-center bg-[rgba(0,0,0,.5)]",
              "md:hidden"
            )}
          >
            <Popup onClose={() => setActiveIndex(null)} />
          </div>
        )}
      </div>
    </>
  );
}

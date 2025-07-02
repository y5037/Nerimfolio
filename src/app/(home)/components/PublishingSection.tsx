"use client";

import Image from "next/image";
import TitleContainer from "./sectionTitle/TitleContainer";
import { useState } from "react";
import Popup from "./popup/Popup";

const images = [
  { id: 1, src: "/images/home/publishingSection/becelo.svg" },
  { id: 2, src: "/images/home/publishingSection/becelo.svg" },
  { id: 3, src: "/images/home/publishingSection/becelo.svg" },
  { id: 4, src: "/images/home/publishingSection/becelo.svg" },
  { id: 5, src: "/images/home/publishingSection/becelo.svg" },
  { id: 6, src: "/images/home/publishingSection/becelo.svg" },
];

export default function PublishingSection() {
  const [activeIndex, setActiveIndex] = useState<string | null>(null);

  const slideImages = [...images, ...images, ...images];

  return (
    <>
      <TitleContainer id="Layouts" />
      <div className="group relative w-full">
        <div
          className={`flex w-max animate-slideLeft group-hover:[animation-play-state:paused] ${
            activeIndex !== null ? "[animation-play-state:paused]" : ""
          }`}
        >
          {slideImages.map((image, idx) => {
            const uniqueKey = `${image.id}-${idx}`;
            return (
              <div
                key={uniqueKey}
                className={`flex justify-center items-center w-[200px] h-[200px] mx-8 rounded-full flex-shrink-0 border border-solid border-gray-500 cursor-pointer transition-transform duration-200 ease max-lg1050:w-[150px] max-lg1050:h-[150px] max-xs500:w-25 max-xs500:h-25 ${
                  activeIndex === null && "lg900:hover:-translate-y-3"
                }`}
                onClick={() =>
                  setActiveIndex((prev) =>
                    prev === uniqueKey ? null : uniqueKey
                  )
                }
              >
                <div className="relative w-[120px] h-[120px] object-cover max-lg1050:w-[100px] max-lg1050:h-[100px]">
                  <Image src={image.src} alt={`slide-${idx}`} fill />
                </div>
                {activeIndex === uniqueKey && (
                  <div
                    onClick={(e) => e.stopPropagation()}
                    className="absolute z-10 cursor-default"
                  >
                    <Popup onClose={() => setActiveIndex(null)} />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

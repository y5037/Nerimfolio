"use client";

import { PublishingData } from "@/data/home/publishing/types";
import clsx from "clsx";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function ThumbnailImg({
  popupData,
}: {
  popupData: PublishingData;
}) {
  const [loaded, setLoaded] = useState(false);
  const [shouldShow, setShouldShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldShow(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {!loaded && shouldShow && (
        <div className="absolute top-0 left-0 w-full h-full bg-gray-200 animate-pulse z-0" />
      )}
      <Image
        src={popupData.thumbnailImg}
        alt="썸네일"
        fill
        priority
        style={{ objectFit: "cover" }}
        className={clsx(loaded ? "opacity-100" : "opacity-0")}
        onLoad={() => setLoaded(true)}
      />
    </>
  );
}

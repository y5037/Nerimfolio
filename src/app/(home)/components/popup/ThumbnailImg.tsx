"use client";

import { useLoadedSkeleton } from "@/hooks/useLoadedSkeleton";
import { PublishingData } from "@/types/landing";
import clsx from "clsx";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function ThumbnailImg({
  popupData,
}: {
  popupData: PublishingData;
}) {
  const { loaded, setLoaded, shouldShow } = useLoadedSkeleton();

  return (
    <>
      {!loaded && shouldShow && (
        <div
          className={clsx(
            "absolute top-0 left-0 w-full h-full bg-gray-700 animate-pulse z-0"
          )}
        />
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

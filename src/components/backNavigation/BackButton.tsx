"use client";

import clsx from "clsx";
import Image from "next/image";

export default function BackButton({ $about }: { $about?: boolean }) {
  return (
    <>
      <div
        className={clsx(
          "flex my-10 items-center",
          !$about && "sticky top-10 z-[100] max-xs500:mb-7"
        )}
      >
        <Image
          src="/images/common/back.svg"
          alt="뒤로가기"
          width={30}
          height={30}
          className={clsx("cursor-pointer")}
          onClick={() => history.back()}
        />
        {$about && (
          <p className={clsx("ml-4 mt-[-1px] font-medium text-[18px]")}>
            윤 혜림
          </p>
        )}
      </div>
    </>
  );
}

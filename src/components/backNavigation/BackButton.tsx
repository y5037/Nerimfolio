"use client";

import clsx from "clsx";
import Image from "next/image";

export default function BackButton({ $about }: { $about?: boolean }) {
  return (
    <>
      <div className={clsx("flex my-10 items-center")}>
        <Image
          src="/images/common/back.png"
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

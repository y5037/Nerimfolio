"use client";

import clsx from "clsx";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function BackButton({ $about }: { $about?: boolean }) {
  const router = useRouter();

  return (
    <>
      <div
        className={clsx(
          "inline-flex my-10 items-center",
          !$about && "sticky top-10 z-[100] max-xs500:mb-7"
        )}
      >
        <Image
          src="/images/common/back.svg"
          alt="뒤로가기"
          width={30}
          height={30}
          className={clsx("cursor-pointer")}
          onClick={() => ($about ? history.back() : router.push("/projects"))}
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

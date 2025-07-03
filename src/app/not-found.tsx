"use client";

import clsx from "clsx";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <div
      className={clsx(
        "flex flex-col h-[-webkit-fill-available] text-center items-center  px-10 my-[150px]",
        "max-md:my-0 max-md:justify-center"
      )}
    >
      <Image
        src="/images/common/error.svg"
        alt="NotFound"
        width={250}
        height={150}
      />
      <p className={clsx("text-[26px] font-medium text-white")}>
        페이지가 없거나 접근할 수 없어요
        <span
          className={clsx(
            "block font-light text-[18px] text-gray-300 mt-[5px]"
          )}
        >
          경로를 다시 확인해주세요
        </span>
      </p>
      <button
        type="button"
        onClick={() => router.push("/")}
        className={clsx(
          "mt-[50px] h-14 rounded-[33px] px-7 text-blue300 bg-gray100 transition duration-[.3s] hover:bg-gray500 hover:text-gray100 font-medium text-[18px]"
        )}
      >
        홈으로 돌아가기
      </button>
    </div>
  );
}

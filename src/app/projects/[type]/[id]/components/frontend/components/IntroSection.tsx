"use client";

import clsx from "clsx";
import Image from "next/image";

export default function IntroSection() {
  return (
    <>
      <div className={clsx("flex my-10 items-center")}>
        <Image
          src="/images/about/back.png"
          alt="뒤로가기"
          width={30}
          height={30}
          className={clsx("cursor-pointer")}
          onClick={() => history.back()}
        />
      </div>
    </>
  );
}

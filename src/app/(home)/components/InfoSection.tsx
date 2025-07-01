"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function InfoSection() {
  const router = useRouter();

  return (
    <>
      <div
        id="Intro"
        className="font-roboto w-[1140px] mx-auto pt-[70px] pb-[80px] max-md:pt-[100px] max-lg:w-[900px] max-lg1050:w-auto max-lg1050:px-10 max-md:px-6 max-lg900:pb-[150px] max-md:pb-[80px]"
      >
        <p className="text-5xl max-lg1050:text-4xl max-lg900:text-3xl max-md:mb-1 max-xs500:text-2xl">
          Hello <span className="font-thin">my name is</span>
        </p>
        <p
          className="relative left-[-10px] inline-block text-8xl font-black italic cursor-pointer hover:bg-white hover:text-black pb-2 max-lg1050:text-7xl max-lg1050:left-[-6px] max-lg900:text-6xl max-lg900:pb-6 max-lg900:pt-2  max-lg900:left-[-4px] max-xs500:text-5xl"
          onClick={() => router.push("/about")}
        >
          YUN HYE RIM
        </p>
        <p className="text-6xl font-light max-lg1050:text-5xl max-lg900:text-4xl max-md:mt-8">
          Here are
        </p>
        <p className="text-7xl mt-[10px] max-lg1050:text-6xl max-lg900:text-5xl">
          the projects
        </p>
        <p className="text-[10.5rem] mt-[-35px] font-robotoSlab max-lg1050:text-[9rem] max-lg900:text-[8rem] max-md:text-[6.5rem] max-md:leading-[2] max-sm:text-[5.5rem] max-sm:leading-[2.2] max-xs500:leading-[2.4] max-xs500:text-[4rem]">
          I've built —
        </p>
        <p className="text-8xl mt-[-35px] font-thin max-lg1050:text-7xl max-lg900:text-6xl max-xs500:text-5xl">
          with care.
        </p>
      </div>
      <div className="justify-items-center">
        <Image
          src="/images/layout/scroll.svg"
          alt="please, scrolldown"
          width={50}
          height={50}
          className="relative top-0 mb-6 animate-scrollAniMouse"
        />
        <div className="relative w-[2px] h-[150px] mx-auto bg-gray300">
          <div className="absolute top-0 left-0 w-full h-[10px] bg-white animate-scrollAni" />
        </div>
      </div>
    </>
  );
}

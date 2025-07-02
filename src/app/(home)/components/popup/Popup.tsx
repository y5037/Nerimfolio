import Image from "next/image";
import { PopupProps } from "../../types";
import { useClickOutside } from "./hooks/useClickOutside";

export default function Popup({ onClose }: PopupProps) {
  const { ref, handleAnimationEnd, isClosing, setIsClosing } =
    useClickOutside(onClose);

  return (
    <div
      ref={ref}
      onAnimationEnd={handleAnimationEnd}
      className={`w-[calc(100vw_*_(420/1920))] rounded-[14px] overflow-hidden bg-black600 shadow-[0_4px_24px_rgba(0,0,0,0.7)] transition-all md:min-w-[400px] max-md:min-w-[350px] ${
        isClosing
          ? "animate-popupHide"
          : "opacity-0 translate-y-5 scale-75 animate-popupShow"
      }`}
    >
      <div className="relative w-full h-[280px]">
        <button
          type="button"
          onClick={() => setIsClosing(true)}
          className="absolute top-4 right-4 md:hidden z-10"
        >
          X
        </button>
        <div className="absolute top-4 left-4 z-10">
          <Image
            src="/images/home/publishingSection/becelo.svg"
            alt="logo"
            width={70}
            height={50}
          />
        </div>
        <Image
          src="/images/home/frontendSection/frontend1.png"
          alt="썸네일"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="p-6">
        <div className="flex flex-wrap items-center gap-x-2 pb-2 font-light text-gray500">
          <p className="underline underline-offset-1">#company_collaboration</p>
          <p className="underline underline-offset-1">#php</p>
          <p className="underline underline-offset-1">#publishing</p>
        </div>
        <div className="flex-1">
          <p className="text-3xl font-semibold my-2">Becelo</p>
          <p className="my-5">자체 풀필먼트 글로벌 통합 유통 플랫폼</p>
        </div>
        <div className="flex items-center gap-4">
          <button className="flex-1 text-center text-gray200 border border-solid border-black rounded h-9 duration-[.2s] max-lg900:bg-[rgba(255,255,255.3)] max-lg900:text-black lg900:hover:bg-[rgba(255,255,255,.3)]">
            Explore
          </button>
          <button className="flex-1 text-center text-gray200 border border-solid border-black rounded h-9 duration-[.2s] max-lg900:bg-[rgba(255,255,255.3)] max-lg900:text-black lg900:hover:bg-[rgba(255,255,255,.3)]">
            Dive In
          </button>
        </div>
      </div>
    </div>
  );
}

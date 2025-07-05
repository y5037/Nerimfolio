import Image from "next/image";
import { PopupProps } from "../../types";
import { useClickOutside } from "./hooks/useClickOutside";
import clsx from "clsx";
import { popupButton, popupKeyword } from "../../styles";

export default function Popup({ onClose }: PopupProps) {
  const { ref, handleAnimationEnd, isClosing, setIsClosing } =
    useClickOutside(onClose);

  return (
    <div
      ref={ref}
      onAnimationEnd={handleAnimationEnd}
      className={clsx(
        "w-[calc(100vw_*_(400/1920))] max-w-[400px] rounded-[14px] overflow-hidden bg-black600 shadow-[0_4px_24px_rgba(0,0,0,0.7)] transition-all",
        "md:min-w-[400px]",
        "max-md:min-w-[350px]",
        isClosing
          ? "animate-popupHide"
          : "opacity-0 translate-y-5 scale-75 animate-popupShow"
      )}
    >
      <div className={clsx("relative w-full h-[280px]")}>
        <button
          type="button"
          onClick={() => setIsClosing(true)}
          className={clsx("absolute top-4 right-4 z-10", "md:hidden")}
        >
          <Image
            src="/images/home/publishingsection/close.svg"
            alt="X"
            width={30}
            height={30}
          />
        </button>
        <div className={clsx("absolute top-4 left-4 z-10")}>
          <Image
            src="/images/home/publishingSection/slide/becelo.svg"
            alt="Becelo"
            width={80}
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
      <div className={clsx("p-6")}>
        <div
          className={clsx(
            "flex flex-wrap items-center gap-x-2 pb-2 font-light text-gray500"
          )}
        >
          <p className={popupKeyword}>#company_collaboration</p>
          <p className={popupKeyword}>#php</p>
          <p className={popupKeyword}>#publishing</p>
        </div>
        <div className={clsx("flex-1")}>
          <p className={clsx("text-3xl font-semibold my-2")}>Becelo</p>
          <p className={clsx("my-5")}>자체 풀필먼트 글로벌 통합 유통 플랫폼</p>
        </div>
        <div className={clsx("flex items-center gap-4")}>
          <button className={popupButton}>Explore</button>
          <button className={popupButton}>Dive In</button>
        </div>
      </div>
    </div>
  );
}

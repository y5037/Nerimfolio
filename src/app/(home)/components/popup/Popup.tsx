import Image from "next/image";
import { PopupProps } from "../../types";
import { useClickOutside } from "./hooks/useClickOutside";

export default function Popup({ onClose }: PopupProps) {
  const { ref, handleAnimationEnd, isClosing } = useClickOutside(onClose);

  return (
    <div
      ref={ref}
      onAnimationEnd={handleAnimationEnd}
      className={`w-[calc(100vw_*_(420/1920))] h-[500px] bg-black rounded overflow-hidden shadow-gray ${
        isClosing
          ? "animate-popupHide"
          : "opacity-0 translate-y-5 scale-75 animate-popupShow"
      }`}
    >
      <div className="relative w-full h-[280px]">
        <div className="absolute top-3 left-3 z-10">
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
    </div>
  );
}

import Image from "next/image";
import { PopupProps } from "../../types";
import { useClickOutside } from "./hooks/useClickOutside";
import clsx from "clsx";
import { popupButton, popupKeyword } from "../../styles";
import ThumbnailImg from "./ThumbnailImg";

export default function Popup({ onClose, popupData }: PopupProps) {

  const { ref, handleAnimationEnd, isClosing, setIsClosing } =
    useClickOutside(onClose);

  if (!popupData) return;
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
            src="/images/home/publishingSection/close.svg"
            alt="X"
            width={30}
            height={30}
          />
        </button>
        <div
          className={clsx(
            "absolute top-4 left-4 z-10",
            popupData.id === 1 && "mt-[-15px] ml-[-15px]"
          )}
        >
          <Image src={popupData.logoImg} alt="Logo" width={80} height={50} />
        </div>
        <ThumbnailImg popupData={popupData} />
      </div>
      <div className={clsx("p-6")}>
        <div
          className={clsx(
            "flex flex-wrap items-center gap-x-2 pb-2 font-light text-gray500"
          )}
        >
          {popupData.keyword.map((item, idx) => (
            <p key={idx} className={popupKeyword}>
              #{item}
            </p>
          ))}
        </div>
        <div className={clsx("flex-1")}>
          <p className={clsx("text-3xl font-semibold my-2")}>
            {popupData.title}
          </p>
          <p className={clsx("my-5")}>{popupData.description}</p>
        </div>
        <div className={clsx("flex items-center gap-4")}>
          <button className={popupButton}>Explore</button>
          <button
            className={popupButton}
            onClick={() => window.open(popupData.diveInLink)}
          >
            Dive In
          </button>
        </div>
      </div>
    </div>
  );
}

import { useScrollFade } from "@/hooks/useScrollFade";
import { RetrospectiveGroup } from "@/types/projects";
import clsx from "clsx";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";

export default function RetrospectiveCard({
  item,
  setActiveId,
  isActive,
  isLeftTilt,
  delay,
}: {
  item: RetrospectiveGroup;
  setActiveId: Dispatch<SetStateAction<number | null>>;
  isActive: boolean;
  isLeftTilt: boolean;
  delay: string;
}) {
  const { fadeOpacity, contentRef } = useScrollFade(isActive);

  return (
    <div
      key={item.id}
      onClick={() => setActiveId(isActive ? null : item.id)}
      className={clsx(
        "relative w-full h-96 cursor-pointer rounded-xl overflow-hidden transition-all ease-out shadow-[0_15px_30px_rgba(0,0,0,0.8),0_8px_15px_rgba(255,255,255,0.5)_inset]",
        "bg-zinc-800 border border-zinc-700 shadow-lg",
        "max-sm:h-[350px]",
        "hover:scale-105",
        isActive
          ? "rotate-0 w-full max-w-4xl z-50 scale-105"
          : isLeftTilt
          ? "md:-rotate-6"
          : "md:rotate-6",
        isActive
          ? "w-full max-w-4xl z-50 scale-105 border-0 animate-shadowPulse duration-0"
          : "duration-1000"
      )}
      style={{
        transitionProperty: "transform, width, height, box-shadow, filter",
      }}
    >
      {!isActive && (
        <span
          className={clsx(
            "absolute inset-0 pointer-events-none animate-shine z-10"
          )}
          style={{
            background:
              "linear-gradient(120deg, transparent 40%, rgba(255,255,255,0.07) 50%, transparent 60%)",
            filter: "blur(6px)",
            animationDelay: delay,
          }}
        />
      )}
      <div
        className={clsx(
          "absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-900 transition-all duration-500 ease-out",
          "hover:brightness-110"
        )}
      />
      <div
        className={clsx(
          "relative w-full overflow-hidden rounded-t-xl transition-all duration-500",
          isActive ? "brightness-100 blur-0 h-full" : "brightness-75 blur-sm"
        )}
      >
        <div className={clsx("absolute inset-0 bg-[rgba(0,0,0,.7)] z-10")} />
        <Image
          src={item.imageUrl}
          alt={item.title}
          fill
          className={clsx("object-cover object-[center_-1px]")}
          draggable={false}
        />
      </div>
      <div
        className={clsx(
          "flex items-center gap-2 absolute top-[-15px] duration-500",
          isLeftTilt ? "right-[-10px]" : "left-[-10px] flex-row-reverse",
          isActive
            ? `opacity-100 text-xl top-[20px] ${
                isLeftTilt ? "right-[25px]" : "left-[25px]"
              } text-light text-zinc-400/50`
            : "opacity-0 top-10"
        )}
      >
        <span className={clsx("text-xs text-gray300 font-light")}>
          {item.subheading}
        </span>
        {String(item.id).padStart(2, "0")}
      </div>
      <div
        ref={contentRef}
        className={clsx(
          "absolute inset-0 px-8 flex flex-col justify-start transition-all duration-500",
          isActive
            ? "opacity-100 translate-y-[120px] overflow-y-auto"
            : "opacity-30 translate-y-[200px] overflow-y-hidden",
          isActive && isLeftTilt
            ? "lg1050:translate-x-[20px]"
            : isActive && !isLeftTilt
            ? "lg1050:translate-x-[-20px]"
            : null,
          isLeftTilt ? "text-left" : "text-right",
          "max-h-[200px]",
          "hide-scrollbar"
        )}
        style={{
          WebkitMaskImage: isActive
            ? "none"
            : "linear-gradient(to bottom, rgba(0,0,0,1) 20%, rgba(0,0,0,0) 100%)",
          WebkitMaskRepeat: "no-repeat",
          WebkitMaskSize: "100% 100%",
          maskImage: isActive
            ? "none"
            : "linear-gradient(to bottom, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)",
          maskRepeat: "no-repeat",
          maskSize: "100% 100%",
        }}
      >
        <div
          className={clsx(
            "text-lg sm:text-2xl font-semibold text-zinc-300 mb-5 group-hover:text-indigo-300"
          )}
        >
          <p>{item.title}</p>
          {isActive && (
            <div className={clsx(!isLeftTilt && "flex justify-end")}>
              <div className={clsx("my-3 w-5 h-0.5 bg-gray200")} />
            </div>
          )}
        </div>
        <p
          className={clsx(
            "text-gray200 text-sm whitespace-pre-line leading-relaxed font-light"
          )}
        >
          {item.description}
        </p>
      </div>
      <div
        className={clsx(
          "pointer-events-none absolute bottom-0 left-0 w-full h-48"
        )}
        style={{
          background: "linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0))",
          opacity: isActive ? fadeOpacity : 0,
        }}
      />
      <div
        className={clsx(
          "absolute inset-0 rounded-xl pointer-events-none transition-colors duration-500 border border-transparent",
          "hover:border-indigo-400"
        )}
      />
    </div>
  );
}

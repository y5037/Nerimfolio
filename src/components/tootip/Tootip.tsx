"use client";

import { useTooltipStore } from "@/store/useTooltipStore";
import clsx from "clsx";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Tootip() {
  const [visible, setVisible] = useState(false);

  const { message, show, hideToast } = useTooltipStore();

  useEffect(() => {
    if (show) {
      setVisible(true);
      const timer = setTimeout(() => {
        setVisible(false);
        setTimeout(() => hideToast(), 300);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [show, hideToast]);

  if (!show || !message) return null;

  return (
    <div
      role="alert"
      className={clsx(
        "fixed bottom-[calc(50px+theme(spacing.safe-bottom))] left-1/2 z-[9999] w-auto pl-5 pr-7 py-3",
        "transform -translate-x-1/2 transition-all duration-300 ease-out",
        "bg-zinc-800 text-zinc-100 rounded-md shadow-lg shadow-black/20",
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-[-10px] pointer-events-none",
        "max-md:max-w-[327px] max-md:px-4"
      )}
    >
      <div className={clsx("flex items-center gap-2.5")}>
        <Image
          src="/images/common/tooltipCheck.png"
          alt="check"
          width={20}
          height={20}
          className={clsx("w-5 h-5")}
        />
        <p className={clsx("text-sm font-semibold leading-6 m-0")}>{message}</p>
      </div>
    </div>
  );
}

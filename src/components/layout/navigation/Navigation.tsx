"use client";

import { useRouter } from "next/navigation";
import { navLinks } from "@/components/layout/navigation/constants/navLinks";
import Image from "next/image";
import { useNavToggle } from "./hooks/useNavToggle";
import clsx from "clsx";

export default function Navigation() {
  const router = useRouter();

  const { isShowMenu, setIsShowMenu, outRef } = useNavToggle();

  return (
    <>
      <div
        className={clsx(
          "hidden fixed right-12 top-8 cursor-pointer z-[9999]",
          "max-md:block max-md:right-6"
        )}
        ref={outRef}
      >
        <Image
          src={
            isShowMenu
              ? "/images/layout/menuOff.svg"
              : "/images/layout/menuOn.svg"
          }
          alt="Menu On"
          width={30}
          height={106}
          onClick={() => setIsShowMenu((prev) => !prev)}
        />
      </div>
      <div
        className={clsx(
          "fixed right-[0] writing-mode-vertical w-20 h-full bg-[rgba(0,0,0,0.2)] flex pt-[100px] gap-6 transition-transform duration-500 ease-in-out z-[100] text-gray-300",
          isShowMenu ? "max-md:translate-x-0" : "max-md:translate-x-full"
        )}
      >
        {navLinks.map((menu, i) => {
          return (
            <button
              type="button"
              key={i}
              onClick={() =>
                menu.label !== "Velog"
                  ? router.push(menu.href)
                  : window.open("https://velog.io/@nerimy/posts", "_blank")
              }
              className={clsx("hover:text-white duration-200")}
            >
              {menu.label}
            </button>
          );
        })}
      </div>
    </>
  );
}

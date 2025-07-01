"use client";

import { useRouter } from "next/navigation";
import { navLinks } from "@/app/constants/navigation";
import Image from "next/image";
import useNavToggle from "./hooks/useNavToggle";

export default function Navigation() {
  const router = useRouter();

  const { isShowMenu, setIsShowMenu, outRef } = useNavToggle();

  return (
    <>
      <div
        className="hidden fixed right-12 top-8 cursor-pointer z-20 max-md:block"
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
        className={`fixed right-[0] writing-mode-vertical w-20 h-full bg-[rgba(0,0,0,0.2)] flex pt-[100px] gap-6 max-md:w-32 max-md:text-lg  transition-transform duration-500 ease-in-out z-10 ${
          isShowMenu ? "max-md:translate-x-0" : "max-md:translate-x-full"
        }`}
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
              className="hover:text-gray-300 duration-[.2s]"
            >
              {menu.label}
            </button>
          );
        })}
      </div>
    </>
  );
}

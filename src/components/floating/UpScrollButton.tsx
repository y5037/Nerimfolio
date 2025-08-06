import clsx from "clsx";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function UpScrollButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const scrollContainer = document.getElementById("scroll-container");

    if (!scrollContainer) return;

    const handleScroll = () => {
      setIsVisible(scrollContainer.scrollTop > 300);
    };

    scrollContainer.addEventListener("scroll", handleScroll);

    return () => {
      scrollContainer.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    const scrollContainer = document.getElementById("scroll-container");
    if (scrollContainer) {
      scrollContainer.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div
      className={clsx(
        "fixed bottom-0 inset-x-0 duration-300 transition-opacity z-10",
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      )}
    >
      <div
        className={clsx(
          "w-[1140px] mx-auto flex justify-end relative right-[-70px] bottom-[30px] cursor-pointer",
          "max-[1500px]:right-0",
          "max-[1250px]:right-[50px]",
          "max-[1198px]:right-0",
          "max-[1049px]:right-[50px]",
          "max-lg:w-[900px]",
          "max-lg1050:w-auto max-lg1050:px-10",
          "max-md:px-6 max-md:right-0"
        )}
      >
        <div
          className={clsx(
            "relative w-[40px] h-[40px]",
            "max-md:w-[30px] max-md:h-[30px]"
          )}
          onClick={handleClick}
        >
          <Image src="/images/common/up.svg" alt="Up" fill />
        </div>
      </div>
    </div>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import useMedia from "use-media";

export const useNavToggle = () => {
  const [isShowMenu, setIsShowMenu] = useState(false);

  const outRef = useRef<HTMLDivElement | null>(null);

  const isMobile = useMedia({ maxWidth: 768 });

  useEffect(() => {
    setIsShowMenu(false);
  }, [isMobile]);

  useEffect(() => {
    const handleClickOutside = (e: { target: any }) => {
      if (outRef.current && !outRef.current.contains(e.target)) {
        setIsShowMenu(false);
      }
    };

    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  return { isShowMenu, setIsShowMenu, outRef };
}

import { useEffect, useRef, useState } from "react";

export const useClickOutside = (onClose: () => void) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsClosing(true);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  function handleAnimationEnd() {
    if (isClosing) {
      onClose();
    }
  }

  return {
    ref,
    handleAnimationEnd,
    isClosing,
    setIsClosing,
  };
};

import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";

export const useClickOutside = ({
  onClose,
  setActiveId,
}: {
  onClose?: () => void;
  setActiveId?: Dispatch<SetStateAction<number | null>>;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsClosing(true);
        setActiveId?.(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setActiveId]);

  function handleAnimationEnd() {
    if (isClosing) {
      onClose?.();
    }
  }

  return {
    ref,
    handleAnimationEnd,
    isClosing,
    setIsClosing,
  };
};

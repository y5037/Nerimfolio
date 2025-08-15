import { useEffect, useState } from "react";
import { useModalScrollLock } from "./useModalScrollLock";

export const useModalController = (defaultValue = false) => {
  const [showModal, setShowModal] = useState(defaultValue);
  const [isVisible, setIsVisible] = useState(true);

  const open = () => {
    setShowModal(true);
    setIsVisible(true);
  };
  const close = () => setShowModal(false);

  const handleExitComplete = () => {
    setIsVisible(false);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };

    if (showModal) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [showModal]);

  useModalScrollLock(showModal);

  return { showModal, isVisible, open, close, handleExitComplete };
};

import { useEffect, useState } from "react";

export const useModalController = (defaultValue = false) => {
  const [showModal, setShowModal] = useState(defaultValue);

  const open = () => setShowModal(true);
  const close = () => setShowModal(false);
  const toggle = () => setShowModal((prev) => !prev);

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

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [showModal]);

  return { showModal, open, close, toggle };
};

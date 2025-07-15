import { useEffect, useState } from "react";

export const useStorySliderLayout = () => {
  const getSize = () => {
    if (window.innerWidth <= 480) return { width: 300, height: 400 };
    if (window.innerWidth <= 768) return { width: 400, height: 500 };
    return { width: 500, height: 600 };
  };
  const [size, setSize] = useState(getSize());

  useEffect(() => {
    const handleResize = () => setSize(getSize());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return {size}
};

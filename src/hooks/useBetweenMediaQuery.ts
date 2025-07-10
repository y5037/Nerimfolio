import { useEffect, useState } from "react";

export const useBetweenMediaQuery = (min: number, max: number) => {
  const [isMatch, setIsMatch] = useState(false);

  useEffect(() => {
    const query = `(min-width:${min}px) and (max-width:${max}px)`;
    const mediaQuery = window.matchMedia(query);

    const updateMatch = () => setIsMatch(mediaQuery.matches);
    updateMatch();

    mediaQuery.addEventListener("change", updateMatch);
    return () => mediaQuery.removeEventListener("change", updateMatch);
  }, [min, max]);

  return isMatch;
};

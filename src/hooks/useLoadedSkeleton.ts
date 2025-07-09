import { useEffect, useState } from "react";

export const useLoadedSkeleton = () => {
  const [loaded, setLoaded] = useState(false);
  const [shouldShow, setShouldShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldShow(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return { loaded, setLoaded, shouldShow };
};

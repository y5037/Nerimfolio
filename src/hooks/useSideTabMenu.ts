import { TabMenu } from "@/types/projects";
import { useEffect, useRef, useState } from "react";

export const useSideTabMenu = (tabs: TabMenu[], activeTab: string) => {
  const [indicatorY, setIndicatorY] = useState(0);

  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const updateIndicator = () => {
      const idx = tabs.findIndex((tab) => tab.title === activeTab);
      const targetEl = itemRefs.current[idx];

      if (targetEl) {
        setIndicatorY(targetEl.offsetTop);
      }
    };
    updateIndicator();

    window.addEventListener("resize", updateIndicator);
    return () => window.removeEventListener("resize", updateIndicator);
  }, [tabs, activeTab]);

  return { indicatorY, itemRefs };
};

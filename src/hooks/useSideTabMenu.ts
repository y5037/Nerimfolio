import { TabMenu } from "@/types/projects";
import { useEffect, useRef, useState } from "react";

export const useSideTabMenu = (tabs: TabMenu[], activeTab: string) => {
  const [indicatorX, setIndicatorX] = useState(0);
  const [indicatorY, setIndicatorY] = useState(0);
  const [indicatorWidth, setIndicatorWidth] = useState(0);

  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const isActiveIndex = tabs.findIndex((tab) => tab.title === activeTab);

  useEffect(() => {
    const updateIndicator = () => {
      const targetEl = itemRefs.current[isActiveIndex];

      if (targetEl) {
        setIndicatorX(targetEl.offsetLeft);
        setIndicatorY(targetEl.offsetTop);
        setIndicatorWidth(targetEl.offsetWidth);
      }
    };
    updateIndicator();

    window.addEventListener("resize", updateIndicator);
    return () => window.removeEventListener("resize", updateIndicator);
  }, [tabs, activeTab, isActiveIndex]);

  return { indicatorX, indicatorY, itemRefs, isActiveIndex, indicatorWidth };
};

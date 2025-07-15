import clsx from "clsx";
import { TabProps } from "../types";
import { ABOUT_TABS } from "@/lib/constants/aboutTabs";

export default function TabContainer({ isTab, setIsTab }: TabProps) {
  return (
    <div
      className={clsx(
        "flex flex-items justify-between border-t border-solid border-gray500 py-4"
      )}
    >
      <div
        className={clsx(
          "flex flex-items gap-10 text-gray500 w-full text-center pr-[15px]"
        )}
      >
        {ABOUT_TABS.map((tab) => (
          <button
            key={tab.key}
            type="button"
            className={clsx(
              "flex-[1] duration-[.2s] hover:text-white",
              isTab === tab.key && "text-white"
            )}
            onClick={() => setIsTab(tab.key)}
          >
            {tab.emoji}
            <span className={clsx("ml-1")}>{tab.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

import { Dispatch, SetStateAction } from "react";

export interface TabProps {
  isTab: "Intro" | "Builds" | "Connect";
  setIsTab: Dispatch<SetStateAction<"Intro" | "Builds" | "Connect">>;
}

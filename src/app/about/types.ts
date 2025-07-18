import { Dispatch, SetStateAction } from "react";

export interface TabProps {
  isTab: "Intro" | "Builds" | "Connect";
  setIsTab: Dispatch<SetStateAction<"Intro" | "Builds" | "Connect">>;
}

export type ModalController = {
  showModal: boolean;
  isVisible: boolean;
  open: () => void;
  close: () => void;
  handleExitComplete: () => void;
};

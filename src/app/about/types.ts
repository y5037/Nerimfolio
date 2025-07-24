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

export interface SlideProps {
  showProgress: boolean;
  showFirstStory: boolean;
  controller: ModalController;
  setLoadingBar: Dispatch<SetStateAction<number>>;
  effect: "cube" | "creative";
  setEffect: Dispatch<SetStateAction<"cube" | "creative">>;
}

import { PopupData } from "@/data/publishing/types";

export interface PopupProps {
  onClose: () => void;
  popupData: PopupData;
}

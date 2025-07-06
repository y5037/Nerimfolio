import { PublishingData } from "@/data/publishing/types";

export interface PopupProps {
  onClose: () => void;
  popupData: PublishingData;
}

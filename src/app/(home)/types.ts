import { PublishingData } from "@/data/publishing/types";

export interface PopupProps {
  onClose: () => void;
  popupData: PublishingData;
}

export interface FixedBackgroundImgProps {
  id: number;
  thumbnailImg: string;
}

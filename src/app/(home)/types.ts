import { PublishingData } from "@/data/home/publishing/types";

export interface PopupProps {
  onClose: () => void;
  popupData: PublishingData;
}

export interface FixedBackgroundImgProps {
  id: number;
  thumbnailImg: string;
}

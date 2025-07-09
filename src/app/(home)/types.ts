import { PublishingData } from "@/types/landing";

export interface PopupProps {
  onClose: () => void;
  popupData: PublishingData;
}

export interface FixedBackgroundImgProps {
  id: number;
  thumbnailImg: string;
}

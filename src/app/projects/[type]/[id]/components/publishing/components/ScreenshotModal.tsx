import { ModalController } from "@/app/about/types";
import FadeAnimate from "@/components/modal/FadeAnimate";
import Image from "next/image";

export default function ScreenshotModal({
  imgSrc,
  controller,
}: {
  imgSrc: string;
  controller: ModalController;
}) {
  return (
    <FadeAnimate controller={controller} $screenshot>
      <Image src={imgSrc} alt="스크린샷" fill />
    </FadeAnimate>
  );
}

import { ModalController } from "@/app/about/types";
import FadeAnimate from "@/components/modal/FadeAnimate";
import Image from "next/image";

export default function ScreenshotModal({
  $publishingOverview,
  $frontendFeature,
  imgSrc,
  controller,
}: {
  $publishingOverview?: boolean;
  $frontendFeature?: boolean;
  imgSrc: string;
  controller: ModalController;
}) {
  return (
    <FadeAnimate
      controller={controller}
      $frontendFeature={$frontendFeature}
      $publishingOverview={$publishingOverview}
    >
      {$frontendFeature || $publishingOverview ? (
        <Image src={imgSrc} alt="스크린샷" width={1400} height={0} />
      ) : (
        <Image src={imgSrc} alt="스크린샷" fill />
      )}
    </FadeAnimate>
  );
}

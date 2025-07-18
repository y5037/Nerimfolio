"use client";

import Image from "next/image";
import { ModalController } from "../types";
import FadeAnimate from "@/components/modal/FadeAnimate";

export default function QRCodeModal({
  controller,
}: {
  controller: ModalController;
}) {
  return (
    <FadeAnimate controller={controller} $qrcode>
      <Image src="/images/about/kakaoTalk.jpg" alt="카카오톡 QR" fill />
    </FadeAnimate>
  );
}

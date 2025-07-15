"use client";

import Image from "next/image";
import { ModalProps } from "../types";
import FadeAnimate from "@/components/modal/FadeAnimate";

export default function QRCodeModal({ isClose }: ModalProps) {
  return (
    <FadeAnimate isClose={isClose} $qrcode>
      <Image src="/images/about/kakaoTalk.jpg" alt="카카오톡 QR" fill />
    </FadeAnimate>
  );
}

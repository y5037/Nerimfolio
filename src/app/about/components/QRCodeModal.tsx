"use client";

import Image from "next/image";
import { ModalProps } from "../types";
import FadeAnimate from "@/components/modal/FadeAnimate";
import { useState } from "react";

export default function QRCodeModal({ isClose }: ModalProps) {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <FadeAnimate
      isClose={isClose}
      isVisible={isVisible}
      setIsVisible={setIsVisible}
      $qrcode
    >
      <Image src="/images/about/kakaoTalk.jpg" alt="카카오톡 QR" fill />
    </FadeAnimate>
  );
}

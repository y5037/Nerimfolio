"use client";

import Image from "next/image";
import { QRModalProps } from "../types";
import clsx from "clsx";

export default function QRCodeModal({ modalRef }: QRModalProps) {
  return (
    <>
      <div
        className={clsx(
          "fixed inset-0 bg-[rgba(0,0,0,0.5)] z-10 flex justify-center items-center"
        )}
      >
        <div
          ref={modalRef}
          className={clsx(
            "relative rounded shadow-xl overflow-hidden w-[300px] h-[370px]",
            "max-s:w-full max-s:mx-4"
          )}
        >
          <Image src="/images/about/kakaoTalk.jpg" alt="카카오톡 QR" fill />
        </div>
      </div>
    </>
  );
}

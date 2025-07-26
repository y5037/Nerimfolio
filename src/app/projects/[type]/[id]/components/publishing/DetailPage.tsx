"use client";

import BackButton from "@/components/backNavigation/BackButton";
import ContentsLayout from "@/components/layout/responsive/ContentsLayout";
import DetailWrapper from "../common/DetailWrapper";
import UpScrollButton from "@/components/floating/UpScrollButton";

export default function DetailPage({ type }: { type: string }) {
  return (
    <>
      <ContentsLayout>
        <BackButton />
        <DetailWrapper type={type} />
        <UpScrollButton />
      </ContentsLayout>
    </>
  );
}

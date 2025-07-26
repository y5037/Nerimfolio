"use client";

import BackButton from "@/components/backNavigation/BackButton";
import ContentsLayout from "@/components/layout/responsive/ContentsLayout";
import DetailWrapper from "../common/DetailWrapper";
import UpScrollButton from "@/components/floating/UpScrollButton";
import MediaContainer from "../common/MediaContainer";

export default function DetailPage({ type }: { type: string }) {
  return (
    <>
      <ContentsLayout>
        <BackButton />
        <MediaContainer type={type} />
        <DetailWrapper type={type} />
        <UpScrollButton />
      </ContentsLayout>
    </>
  );
}

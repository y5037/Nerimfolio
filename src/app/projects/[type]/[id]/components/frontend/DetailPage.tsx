"use client";

import ContentsLayout from "@/components/layout/responsive/ContentsLayout";
import BackButton from "../../../../../../components/backNavigation/BackButton";
import VideoContainer from "./components/VideoContainer";
import DetailWrapper from "./components/DetailWrapper";
import UpScrollButton from "@/components/floating/UpScrollButton";

export default function DetailPage() {
  return (
    <>
      <ContentsLayout>
        <BackButton />
        <VideoContainer />
        <DetailWrapper />
        <UpScrollButton />
      </ContentsLayout>
    </>
  );
}

"use client";

import ContentsLayout from "@/components/layout/responsive/ContentsLayout";
import BackButton from "../../../../../../components/backNavigation/BackButton";
import VideoContainer from "./components/VideoContainer";
import DetailWrapper from "./components/DetailWrapper";

export default function DetailPage() {
  return (
    <>
      <ContentsLayout>
        <BackButton />
        <VideoContainer />
        <DetailWrapper />
      </ContentsLayout>
    </>
  );
}

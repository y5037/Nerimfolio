"use client";

import ContentsLayout from "@/components/layout/responsive/ContentsLayout";
import BackButton from "../../../../../../components/backNavigation/BackButton";
import VideoContainer from "./components/VideoContainer";
import DetailWrapper from "../common/DetailWrapper";
import UpScrollButton from "@/components/floating/UpScrollButton";

export default function DetailPage({ type }: { type: string }) {
  return (
    <>
      <ContentsLayout>
        <BackButton />
        <VideoContainer />
        <DetailWrapper type={type}/>
        <UpScrollButton />
      </ContentsLayout>
    </>
  );
}

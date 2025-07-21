import ContentsLayout from "@/components/layout/responsive/ContentsLayout";
import IntroSection from "./components/IntroSection";
import VideoSection from "./components/VideoSection";

export default function Contents() {
  return (
    <>
      <ContentsLayout>
        <IntroSection />
        <VideoSection />
      </ContentsLayout>
    </>
  );
}

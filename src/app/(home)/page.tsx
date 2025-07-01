import BodyContainer from "@/components/layout/responsive/BodyContainer";
import FrontendSection from "./components/FrontendSection";
import InfoSection from "./components/InfoSection";
import PublishingSection from "./components/PublishingSection";
import TechBlogSection from "./components/TechBlogSection";

export default function Home() {
  return (
    <BodyContainer>
      <InfoSection />
      <FrontendSection />
      <PublishingSection />
      <TechBlogSection />
      {/* <button>Contact 보러가기</button> */}
    </BodyContainer>
  );
}

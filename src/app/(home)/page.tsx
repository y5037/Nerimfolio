import BodyContainer from "@/components/layout/responsive/BodyContainer";
import FrontendSection from "./components/FrontendSection";
import IntroSection from "./components/IntroSection";
import PublishingSection from "./components/PublishingSection";
import TechBlogSection from "./components/TechBlogSection";
import ScrollTo from "@/app/(home)/components/scrollTo/ScrollTo";
import ContactButton from "./components/ContactButton";

export default function Home() {
  return (
    <BodyContainer>
      <IntroSection />
      <ScrollTo coord="Intro" />
      <FrontendSection />
      <ScrollTo coord="ThingsIBuilt" />
      <PublishingSection />
      <ScrollTo coord="Layouts" />
      <TechBlogSection />
      <ScrollTo coord="InWords" />
      <ContactButton />
    </BodyContainer>
  );
}

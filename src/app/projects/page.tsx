import BodyContainer from "@/components/layout/responsive/BodyContainer";
import ProjectContents from "./components/ProjectContents";
import SearchContainer from "./components/SearchContainer";
import Footer from "@/components/layout/footer/Footer";

export default function ProjectsList() {
  return (
    <>
      <BodyContainer>
        <SearchContainer />
        <ProjectContents $frontend />
        <ProjectContents />
      </BodyContainer>
      <Footer />
    </>
  );
}

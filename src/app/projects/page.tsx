import BodyContainer from "@/components/layout/responsive/BodyContainer";
import ProjectContents from "./components/ProjectContents";
import SearchContainer from "./components/SearchContainer";

export default function ProjectsList() {
  return (
    <BodyContainer>
      <SearchContainer />
      <ProjectContents $frontend/>
      <ProjectContents $publishing/>
    </BodyContainer>
  );
}

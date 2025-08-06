import ContributionSection from "@/app/projects/[type]/[id]/components/frontend/components/contents/components/ContributionSection";
import GitSection from "@/app/projects/[type]/[id]/components/frontend/components/contents/components/GitSection";
import MeetingSection from "@/app/projects/[type]/[id]/components/frontend/components/contents/components/MeetingSection";
import TeamSection from "@/app/projects/[type]/[id]/components/frontend/components/contents/components/TeamSection";
import ToolSection from "@/app/projects/[type]/[id]/components/frontend/components/contents/components/ToolSection";
import {
  contributionData,
  gitData,
  meetingData,
  teamData,
  toolData,
} from "@/data/projects/detail/collaboration/albaform";
import { CollaborationSectionKey } from "@/lib/constants/collaborationCards";

export const collaborationContentMap: Record<
  CollaborationSectionKey,
  React.ReactNode
> = {
  team: <TeamSection teamData={teamData} />,
  contribution: <ContributionSection contributionData={contributionData} />,
  tool: <ToolSection toolData={toolData} />,
  git: <GitSection gitData={gitData} />,
  meeting: <MeetingSection meetingData={meetingData} />,
};

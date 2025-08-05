import { CollaborationCardType } from "@/types/projects";

export const collaborationCards: CollaborationCardType[] = [
  {
    key: "team",
    iconKey: "users",
    title: "Team Members & Roles",
    color: "from-rose-500 to-rose-400",
    thumbnail: "/images/projects/detail/common/team.png",
  },
  {
    key: "contribution",
    iconKey: "clipboardList",
    title: "Individual Contributions",
    color: "from-orange-400 to-amber-400",
    thumbnail: "/images/projects/detail/common/contributions.jpg",
  },
  {
    key: "tool",
    iconKey: "wrench",
    title: "Collaboration Tools",
    color: "from-indigo-400 to-blue-400",
    thumbnail: "/images/projects/detail/common/toolkit.png",
  },
  {
    key: "git",
    iconKey: "gitBranch",
    title: "Git Workflow",
    color: "from-pink-500 to-purple-500",
    thumbnail: "/images/projects/detail/common/branch.png",
  },
  {
    key: "meeting",
    iconKey: "calendarCheck",
    title: "Meeting Style",
    color: "from-teal-400 to-sky-400",
    thumbnail: "/images/projects/detail/common/meeting.png",
  },
];

export type CollaborationSectionKey =
  (typeof collaborationCards)[number]["key"];

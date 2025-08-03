import { IconKey } from "./collaborationIcons";

type CardType = {
  iconKey: IconKey;
  title: string;
  color: string;
  thumbnail: string;
};

export const collaborationCards: CardType[] = [
  {
    iconKey: "users",
    title: "Team Members & Roles",
    color: "from-purple-400 to-pink-400",
    thumbnail: "/images/projects/detail/common/team.png",
  },
  {
    iconKey: "clipboardList",
    title: "Individual Contributions",
    color: "from-amber-400 to-orange-400",
    thumbnail: "/images/projects/detail/common/contributions.jpg",
  },
  {
    iconKey: "wrench",
    title: "Collaboration Tools",
    color: "from-indigo-400 to-blue-400",
    thumbnail: "/images/projects/detail/common/toolkit.png",
  },
  {
    iconKey: "gitBranch",
    title: "Git Workflow",
    color: "from-fuchsia-500 to-pink-500",
    thumbnail: "/images/projects/detail/common/branch.png",
  },
  {
    iconKey: "calendarCheck",
    title: "Meeting Style",
    color: "from-green-400 to-lime-400",
    thumbnail: "/images/projects/detail/common/meeting.png",
  },
];

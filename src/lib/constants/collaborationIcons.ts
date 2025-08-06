import {
  Users,
  ClipboardList,
  Wrench,
  GitBranch,
  CalendarCheck,
} from "lucide-react";

export const COLLABORATIONICONS_MAP = {
  users: Users,
  clipboardList: ClipboardList,
  wrench: Wrench,
  gitBranch: GitBranch,
  calendarCheck: CalendarCheck,
} as const;

export type IconKey = keyof typeof COLLABORATIONICONS_MAP;

export type ProjectData = {
  id: number;
  title: string;
  logoImg: string;
  thumbnailImg: string;
  description: string;
};

export type TabMenu = {
  icon: string;
  title: string;
};

export type StackCategory = {
  [category: string]: string[];
};

export type ProgressItems = {
  value: number;
  text: string;
  pathColor: string;
};

export type OverviewData = {
  id: number;
  title: string;
  description: string[];
  keyword: string[];
  thumbnail: string;
  period: string;
  member: number;
  stack: StackCategory[];
  progressbar: ProgressItems[];
  githubLink: string;
  diveInLink: string;
};

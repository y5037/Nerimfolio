export type ProjectData = {
  id: number;
  title: string;
  name: string;
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

export type BaseMediaData = {
  id: number;
  title: string;
  logo: string;
  thumbnail: string;
};

export type VideoData = BaseMediaData & {
  video?: string;
};

export type BaseOverviewData = {
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

export type FrontendOverviewData = BaseOverviewData & {
  member?: number;
  stack?: StackCategory[];
  githubLink?: string;
};

export type PublishingOverviewData = BaseOverviewData & {
  department?: string;
  responsibilities?: string[];
};

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
  period: string;
  progressbar: ProgressItems[];
  diveInLink: string;
};

export type FrontendOverviewData = BaseOverviewData & {
  thumbnail?: string;
  member?: number;
  stack?: StackCategory[];
  githubLink?: string;
};

export type PublishingOverviewData = BaseOverviewData & {
  designScreenshots?: string[];
  department?: string;
  responsibilities?: string[];
};

export type FeatureData = {
  title: string;
  implementedByMe: boolean;
  contributionPercent: number;
  contributionDetails?: string[];
  contributionNote: boolean;
  description: string;
  image: string;
  tech: string[];
  ux: string[];
};

type FeatureGroup = {
  groupName: string;
  features: FeatureData[];
};

export type Features = {
  id: number;
  projectName: string;
  featureGroups: FeatureGroup[];
};

export type TechStackData = {
  title: string;
  description: string;
  titleColor: string;
};

type TechStackGroup = {
  groupName: string;
  techStack?: TechStackData[];
  description?: string;
  directory?: string;
};

export type TechStack = {
  id: number;
  projectName: string;
  techStackGroups: TechStackGroup[];
};

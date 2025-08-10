import { IconKey } from "@/lib/constants/collaborationIcons";

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
  signatureColor: string;
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

export type CollaborationCardType = {
  key: string;
  iconKey: IconKey;
  title: string;
  color: string;
  thumbnail: string;
};

export interface TeamData {
  name: string;
  roles: string[];
}

export interface ContributionData {
  name: string;
  summary: string;
  details: string[];
}

type GitContentType = {
  title: string;
  description: string;
};

export interface GitData {
  imgUrl: string;
  contents: GitContentType[];
}

export interface ToolData {
  name: string;
  icon: string;
  desc: string;
}

export interface MeetingData {
  icon: string;
  title: string;
  description?: string;
  list?: string[];
}

export type RetrospectiveGroup = {
  id: number;
  title: string;
  subheading: string;
  description: string;
  imageUrl: string;
};

export type RetrospectiveData = {
  id: number;
  projectName: string;
  retrospectiveGroup: RetrospectiveGroup[];
};

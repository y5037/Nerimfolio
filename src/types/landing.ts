export type BaseProjectData = {
  id: number;
  thumbnailImg: string;
  keyword: string[];
  title: string;
  description: string;
  diveInLink: string;
};

export type FrontendData = BaseProjectData & {
  logoDefaultImg: string;
  logoActiveImg: string;
};

export type PublishingData = BaseProjectData & {
  logoImg: string;
};

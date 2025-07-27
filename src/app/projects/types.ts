import { Dispatch, SetStateAction } from "react";

export interface SearchContainerProps {
  keyword: string;
  setKeyword?: (value: string) => void;
}

export type ProjectContentsProps = SearchContainerProps & {
  $frontend?: boolean;
  $publishing?: boolean;
};

export type DetailTab = {
  isActive: string;
  setIsActive?: Dispatch<SetStateAction<string>>;
  $frontend: boolean;
};

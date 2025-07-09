export interface SearchContainerProps {
  keyword: string;
  setKeyword?: (value: string) => void;
}

export type ProjectContentsProps = SearchContainerProps & {
  $frontend?: boolean;
  $publishing?: boolean;
};

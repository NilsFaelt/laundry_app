import { ThreadType } from "./threadTypes";

export interface PaginationInfo {
  lastIndex: number;
  firstIndex: number;
  roundedPage: number;
  slicedArray: ThreadType[];
}

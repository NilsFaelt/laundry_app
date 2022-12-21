import { ThreadType } from "../../../../types/threadTypes";

export const getPaginationInfo = (
  threads: ThreadType[],
  page: number,
  perPage: number
): {
  lastIndex: number;
  firstIndex: number;
  roundedPage: number;
  slicedArray: ThreadType[];
} => {
  const lastIndex = page * perPage;
  const firstIndex = lastIndex - perPage;
  const pages = threads.length / perPage;
  const roundedPage = Math.ceil(pages);
  const slicedArray = threads?.slice(firstIndex, lastIndex);
  return { lastIndex, firstIndex, roundedPage, slicedArray };
};

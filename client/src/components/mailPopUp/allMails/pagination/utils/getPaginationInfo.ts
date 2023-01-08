import { MailType } from "../../../../../types/mailTypes";

export const getPaginationInfo = (
  threads: MailType[],
  page: number,
  perPage: number
): {
  lastIndex: number;
  firstIndex: number;
  roundedPage: number;
  slicedArray: MailType[];
} => {
  const lastIndex = page * perPage;
  const firstIndex = lastIndex - perPage;
  const pages = threads.length / perPage;
  const roundedPage = Math.ceil(pages);
  const slicedArray = threads?.slice(firstIndex, lastIndex);
  return { lastIndex, firstIndex, roundedPage, slicedArray };
};

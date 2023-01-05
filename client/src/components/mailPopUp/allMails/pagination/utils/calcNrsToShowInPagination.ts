import { PaginationInfo } from "../../../../types/paginationTypes";

export const calcNrsToShowInPagination = (
  page: number,
  paginatedArray: PaginationInfo
): number[] => {
  let arrayToRender = [];

  for (let index = 0; index < paginatedArray.roundedPage; index++) {
    arrayToRender.push(index + 1);
  }
  if (page >= 3) {
    arrayToRender = arrayToRender.slice(page - 3, page + 3);
  } else if (page < 3 && page > 1) {
    arrayToRender = arrayToRender.slice(page - 2, page + 4);
  } else if (page === 1) {
    arrayToRender = arrayToRender.slice(page - 1, page + 4);
  }
  return arrayToRender;
};

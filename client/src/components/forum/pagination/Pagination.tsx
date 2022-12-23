import { ThreadType } from "../../../types/threadTypes";
import * as styles from "./pagination.styles";

interface PaginatiomInfo {
  lastIndex: number;
  firstIndex: number;
  roundedPage: number;
  slicedArray: ThreadType[];
}
interface Props {
  setPage: React.Dispatch<React.SetStateAction<number>>;
  page: number;
  pagePerSide: number;
  paginatedArray: PaginatiomInfo;
  filteredThreads: ThreadType[];
}
const Pagination = ({
  setPage,
  page,
  paginatedArray,
  filteredThreads,
}: Props) => {
  const handleClickLeft = () => {
    if (page > 1) {
      setPage((prev) => prev - 1);
    }
  };

  const handleClickRight = () => {
    if (page < paginatedArray.roundedPage) setPage((prev) => prev + 1);
  };

  const calcNrsToShowInPafination = (
    page: number,
    paginatedArray: PaginatiomInfo
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

  const pages = calcNrsToShowInPafination(page, paginatedArray);

  return (
    <styles.Container>
      <styles.Left onClick={() => handleClickLeft()} />
      <styles.NrContainer>
        <styles.PaginationNr onClick={() => setPage(1)}>
          {page >= 4 ? 1 : ""}
        </styles.PaginationNr>
        <styles.PaginationNr>{page >= 4 ? "...." : ""}</styles.PaginationNr>
        {pages.map((nr, i) => (
          <styles.PaginationNr
            key={nr}
            underline={page === nr ? "underline" : "none"}
            onClick={() => {
              setPage(nr);
            }}
          >
            {nr}
          </styles.PaginationNr>
        ))}
        <styles.PaginationNr>
          {page < paginatedArray.roundedPage - 3 && filteredThreads.length > 5
            ? ".... "
            : ""}
        </styles.PaginationNr>
        <styles.PaginationNr onClick={() => setPage(filteredThreads.length)}>
          {page < paginatedArray.roundedPage - 3 &&
          paginatedArray.roundedPage > 5
            ? paginatedArray.roundedPage
            : ""}
        </styles.PaginationNr>
      </styles.NrContainer>
      <styles.Right onClick={() => handleClickRight()} />
    </styles.Container>
  );
};

export default Pagination;

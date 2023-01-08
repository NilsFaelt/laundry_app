import { MailType } from "../../../../types/mailTypes";
import { ThreadType } from "../../../../types/threadTypes";
import * as styles from "./pagination.styles";
import { calcNrsToShowInPagination } from "./utils/calcNrsToShowInPagination";

export interface PaginationInfoMail {
  lastIndex: number;
  firstIndex: number;
  roundedPage: number;
  slicedArray: MailType[];
}

interface Props {
  setPage: React.Dispatch<React.SetStateAction<number>>;
  page: number;
  paginatedArray: PaginationInfoMail;
  filteredThreads: MailType[];
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

  const pages = calcNrsToShowInPagination(page, paginatedArray);

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

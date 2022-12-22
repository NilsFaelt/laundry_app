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
}
const Pagination = ({ setPage, page, paginatedArray }: Props) => {
  console.log(paginatedArray.roundedPage);
  const handleClickLeft = () => {
    if (page > 1) {
      setPage((prev) => prev - 1);
    }
  };
  const handleClickRight = () => {
    if (paginatedArray.roundedPage > page) {
      setPage((prev) => prev + 1);
    }
  };

  const calcNrsToShowInPafination = (
    page: number,
    paginatedArray: PaginatiomInfo
  ): number[] => {
    let arrayToRender = [];
    if (paginatedArray.roundedPage < 6) {
      arrayToRender = new Array(paginatedArray.roundedPage).fill("");
    }
    console.log(arrayToRender);
    return arrayToRender;
  };

  const pages = calcNrsToShowInPafination(page, paginatedArray);
  console.log(pages, "pagess");
  return (
    <styles.Container>
      <styles.Left onClick={() => handleClickLeft()} />
      <styles.NrContainer>
        {pages.map((_, i) => (
          <styles.PaginationNr
            underline={page === i + 1 ? "underline" : "none"}
            onClick={() => {
              setPage(i + 1);
            }}
          >
            {[i + 1]}
          </styles.PaginationNr>
        ))}
      </styles.NrContainer>
      <styles.Right onClick={() => handleClickRight()} />
    </styles.Container>
  );
};

export default Pagination;

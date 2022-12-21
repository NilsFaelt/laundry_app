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
  return (
    <styles.Container>
      <styles.Left onClick={() => handleClickLeft()} />
      {page}
      <styles.Right onClick={() => handleClickRight()} />
    </styles.Container>
  );
};

export default Pagination;

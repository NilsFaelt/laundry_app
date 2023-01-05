import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getAllMails } from "../../../api/getAllMails";
import { RootState } from "../../../redux/store";
import { isUser } from "../../../typeChecking/userCheck";
import { MailType } from "../../../types/mailTypes";
import Pagination from "./pagination/Pagination";
import { getPaginationInfo } from "./pagination/utils/getPaginationInfo";
import EachMail from "../eachMail/EachMail";
import * as styles from "./allMails.styles";
import Spinner from "../../../ui/loadingSpinner/Spinner";

interface Props {
  setChoosenMail: React.Dispatch<React.SetStateAction<MailType | null>>;
  choosenMail: MailType | null;
}
const AllMails = ({ setChoosenMail, choosenMail }: Props) => {
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(7);

  const [allMails, setAllMails] = useState<MailType[]>([]);
  const user = useSelector((state: RootState) => state.userReducer.user);
  const fetchWrapper = async () => {
    if (typeof user?.email === "string") {
      const data = await getAllMails(user?.email);
      const reversedArray = data.data.mails.reverse();
      setAllMails(reversedArray);
    }
  };

  const paginatedArray = getPaginationInfo(allMails, page, perPage);
  useEffect(() => {
    fetchWrapper();
  }, [choosenMail]);

  return (
    <>
      <styles.AllMailsContainer>
        {paginatedArray.slicedArray?.map((mail) => {
          return (
            <EachMail
              setAllMails={setAllMails}
              setChoosenMail={setChoosenMail}
              mail={mail}
            />
          );
        })}
      </styles.AllMailsContainer>
      <Pagination
        setPage={setPage}
        page={page}
        paginatedArray={paginatedArray}
        filteredThreads={allMails}
      />
    </>
  );
};

export default AllMails;

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getAllMails } from "../../../api/getAllMails";
import { RootState } from "../../../redux/store";
import { isUser } from "../../../typeChecking/userCheck";
import { MailType } from "../../../types/mailTypes";
import EachMail from "../eachMail/EachMail";
import * as styles from "./allMails.styles";

interface Props {
  setChoosenMail: React.Dispatch<React.SetStateAction<MailType | null>>;
}
const AllMails = ({ setChoosenMail }: Props) => {
  const [allMails, setAllMails] = useState<MailType[]>([]);
  const user = useSelector((state: RootState) => state.userReducer.user);
  const fetchWrapper = async () => {
    if (typeof user?.email === "string") {
      const data = await getAllMails(user?.email);
      const reversedArray = data.data.mails.reverse();
      setAllMails(reversedArray);
    }
  };

  useEffect(() => {
    fetchWrapper();
  }, []);

  return (
    <styles.AllMailsContainer>
      {allMails?.map((mail) => {
        return <EachMail setChoosenMail={setChoosenMail} mail={mail} />;
      })}
    </styles.AllMailsContainer>
  );
};

export default AllMails;

import { deleteMailById } from "../../../../api/deleteMailByID";
import { MailType } from "../../../../types/mailTypes";
import * as styles from "./deletePopUp.styles";

interface Props {
  mailId: string;
  setAllMails: React.Dispatch<React.SetStateAction<MailType[]>>;
  setDeleetPopUp: React.Dispatch<React.SetStateAction<boolean>>;
}
const DeleteMailPopUp = ({ setDeleetPopUp, mailId, setAllMails }: Props) => {
  const handleDeleteOnClick = (mailId: string) => {
    deleteMailById(mailId);
    setAllMails((prev) => prev.filter((mail) => mail._id !== mailId));
    setDeleetPopUp(false);
  };
  return (
    <styles.container>
      <styles.P>Sure you wanna delete post?</styles.P>
      <styles.BtnDiv>
        <styles.PstvBtn onClick={() => handleDeleteOnClick(mailId)}>
          Yes
        </styles.PstvBtn>
        <styles.DangerBtn onClick={() => setDeleetPopUp(false)}>
          No
        </styles.DangerBtn>
      </styles.BtnDiv>
    </styles.container>
  );
};

export default DeleteMailPopUp;

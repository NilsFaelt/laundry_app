import { deleteReminder } from "../../../api/deleteReminder";
import * as styles from "./deletePopUp.style";
interface Props {
  setToogelDelete: React.Dispatch<React.SetStateAction<boolean>>;
}
const DeletePopUp = ({ setToogelDelete }: Props) => {
  const deleteOnClick = () => {
    deleteReminder();
    setToogelDelete(false);
  };
  return (
    <styles.container>
      <styles.P>Delete Current message?</styles.P>
      <styles.BtnDiv>
        <styles.PstvBtn onClick={() => deleteOnClick()}>Delete</styles.PstvBtn>
        <styles.DangerBtn onClick={() => setToogelDelete(false)}>
          No
        </styles.DangerBtn>
      </styles.BtnDiv>
    </styles.container>
  );
};

export default DeletePopUp;

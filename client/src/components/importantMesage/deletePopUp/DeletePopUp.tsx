import { useEffect, useState } from "react";
import { deleteReminder } from "../../../api/deleteReminder";
import { getReminder } from "../../../api/getReminder";
import { Ireminder } from "../../../types/reminderTypes";
import * as styles from "./deletePopUp.style";
interface Props {
  setToogelDelete: React.Dispatch<React.SetStateAction<boolean>>;
}
const DeletePopUp = ({ setToogelDelete }: Props) => {
  const [showMsg, setShowMsg] = useState(false);
  const [reminder, setReminder] = useState<Ireminder | null>(null);
  const deleteOnClick = () => {
    deleteReminder();
    setToogelDelete(false);
  };
  const fetchWraper = async () => {
    const data = await getReminder();
    if (data) {
      setReminder(data);
    }
  };

  useEffect(() => {
    fetchWraper();
  }, []);
  return (
    <styles.container>
      <styles.P>Delete Current message?</styles.P>
      <styles.BtnDiv>
        <styles.PstvBtn onClick={() => deleteOnClick()}>Delete</styles.PstvBtn>
        <styles.DangerBtn onClick={() => setToogelDelete(false)}>
          No
        </styles.DangerBtn>
      </styles.BtnDiv>
      <styles.Pclick onClick={() => setShowMsg(!showMsg)}>
        Show Current message?
      </styles.Pclick>
      {showMsg && (
        <>
          <styles.MessageTitle>{reminder?.title}</styles.MessageTitle>
          <styles.P>{reminder?.text}</styles.P>
          {reminder ? (
            <styles.PFrom>/{reminder?.from}</styles.PFrom>
          ) : (
            <styles.PFrom>No message</styles.PFrom>
          )}
        </>
      )}
    </styles.container>
  );
};

export default DeletePopUp;

import { MailType } from "../../../types/mailTypes";
import * as styles from "./readMailPopUp.style";

interface Props {
  mail: MailType;
  setChoosenMail: React.Dispatch<React.SetStateAction<MailType | null>>;
}

const ReadMailPopUp = ({ mail, setChoosenMail }: Props) => {
  return (
    <styles.AllMailsContainer>
      <styles.CloseMail onClick={() => setChoosenMail(null)} />
      <styles.P>
        {" "}
        <span>From:</span> {mail.from}
      </styles.P>
      <styles.P>
        {" "}
        <span>Content:</span> {mail.text}
      </styles.P>
    </styles.AllMailsContainer>
  );
};

export default ReadMailPopUp;

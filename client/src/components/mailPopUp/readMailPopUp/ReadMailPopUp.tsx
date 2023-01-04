import { MailType } from "../../../types/mailTypes";
import * as styles from "./readMailPopUp.style";

interface Props {
  mail: MailType;
}

const ReadMailPopUp = ({ mail }: Props) => {
  return (
    <styles.AllMailsContainer>
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

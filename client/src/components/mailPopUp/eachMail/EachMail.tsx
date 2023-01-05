import { updatedMail } from "../../../api/updateMail";
import { MailType } from "../../../types/mailTypes";
import * as styles from "./eachMail.style";
interface Props {
  mail: MailType;
  setChoosenMail: React.Dispatch<React.SetStateAction<MailType | null>>;
}
const EachMail = ({ mail, setChoosenMail }: Props) => {
  const handleClick = (mail: MailType) => {
    if (typeof mail._id === "string" && !mail.read) updatedMail(mail._id);

    setChoosenMail(mail);
  };
  return (
    <styles.Container
      onClick={() => {
        handleClick(mail);
      }}
    >
      From: {mail.from} <br />
      Subject: {mail.subject}
      {mail.read ? <styles.MailOpen /> : <styles.Mail />}
    </styles.Container>
  );
};

export default EachMail;

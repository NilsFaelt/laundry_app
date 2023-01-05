import { useState } from "react";
import { updatedMail } from "../../../api/updateMail";
import { MailType } from "../../../types/mailTypes";
import DeleteMailPopUp from "./DeletePopUp/DeleteMailPopUp";
import * as styles from "./eachMail.style";
interface Props {
  mail: MailType;
  setAllMails: React.Dispatch<React.SetStateAction<MailType[]>>;
  setChoosenMail: React.Dispatch<React.SetStateAction<MailType | null>>;
}
const EachMail = ({ mail, setChoosenMail, setAllMails }: Props) => {
  const [mailId, setMailId] = useState<string>("");
  const [deletePopUp, setDeleetPopUp] = useState(false);
  const handleClick = (mail: MailType) => {
    if (typeof mail._id === "string" && !mail.read) updatedMail(mail._id);
    setChoosenMail(mail);
  };

  const handleDeleteClick = (mail: MailType) => {
    setDeleetPopUp(true);
    if (typeof mail._id === "string") setMailId(mail._id);
  };

  return (
    <styles.Container>
      {deletePopUp ? (
        <DeleteMailPopUp
          setAllMails={setAllMails}
          mailId={mailId}
          setDeleetPopUp={setDeleetPopUp}
        />
      ) : null}
      <styles.Delete onClick={() => handleDeleteClick(mail)} />
      <styles.Div
        onClick={() => {
          handleClick(mail);
        }}
      >
        From: {mail.from} <br />
        Subject: {mail.subject}
      </styles.Div>
      {mail.read ? (
        <styles.MailOpen
          onClick={() => {
            handleClick(mail);
          }}
        />
      ) : (
        <styles.Mail
          onClick={() => {
            handleClick(mail);
          }}
        />
      )}
    </styles.Container>
  );
};

export default EachMail;

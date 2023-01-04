import { useEffect, useState } from "react";
import { getAllUsers } from "../../api/getAllUsers";
import { UserTypeWithNestedAdress } from "../../types/userType";
import * as styles from "./mailPopUp.style";

interface Props {
  setToogleMailPopUp: React.Dispatch<React.SetStateAction<boolean>>;
}

const MailPopUp = ({ setToogleMailPopUp }: Props) => {
  const [text, setText] = useState("");
  const [subject, setSubject] = useState("");
  const [mailIsPerfectMatch, setmailIsPerfectMatch] = useState(false);
  const [to, setTo] = useState("");
  const [allMails, setAllMails] = useState<string[]>([]);
  const [allMailsFiltered, setAllMailsFiltered] = useState<string[]>([]);
  const [toogleMailWriteMail, setToogleMailWriteMail] = useState(false);

  const fetchWrapper = async () => {
    const data = await getAllUsers();
    const allMail = data.users.map(
      (user: UserTypeWithNestedAdress) => user.email
    );
    setAllMails(allMail);
    setAllMailsFiltered(allMail);
  };
  useEffect(() => {
    fetchWrapper();
  }, []);

  useEffect(() => {
    setAllMailsFiltered(
      allMails.filter((mail) =>
        mail.toLocaleLowerCase().includes(to.toLocaleLowerCase())
      )
    );

    const ifMailIsPerfectMatch = allMails.find(
      (mail) => mail.toLocaleLowerCase() === to.toLocaleLowerCase()
    );
    if (ifMailIsPerfectMatch) {
      setmailIsPerfectMatch(true);
    } else if (!ifMailIsPerfectMatch) {
      setmailIsPerfectMatch(false);
    }
  }, [to]);
  console.log(mailIsPerfectMatch);
  return (
    <styles.Container>
      <styles.Back onClick={() => setToogleMailPopUp(false)} />
      <styles.Pen onClick={() => setToogleMailWriteMail(true)} />
      <styles.Mail onClick={() => setToogleMailWriteMail(false)} />
      <styles.MailContainer>
        <styles.Form>
          <styles.TextArea></styles.TextArea>
          <styles.Input placeholder='Subject' />
          <styles.Input
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setTo(e.target.value)
            }
            placeholder='To'
            value={to}
          />
          <styles.Btn>Send</styles.Btn>
          {allMailsFiltered.length > 0 && to !== "" && !mailIsPerfectMatch ? (
            <styles.ShowMailAdresses>
              {allMailsFiltered.map((mail) => {
                return <styles.P onClick={() => setTo(mail)}>{mail}</styles.P>;
              })}
            </styles.ShowMailAdresses>
          ) : null}
        </styles.Form>
      </styles.MailContainer>
    </styles.Container>
  );
};

export default MailPopUp;

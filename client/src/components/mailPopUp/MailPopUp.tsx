import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getAllUsers } from "../../api/getAllUsers";
import { sendMail } from "../../api/sendMail";
import { RootState } from "../../redux/store";
import { MailType } from "../../types/mailTypes";
import { UserTypeWithNestedAdress } from "../../types/userType";
import { shortenDateToString } from "../../utils/shortenDateToString";
import * as styles from "./mailPopUp.style";

interface Props {
  setToogleMailPopUp: React.Dispatch<React.SetStateAction<boolean>>;
}

const MailPopUp = ({ setToogleMailPopUp }: Props) => {
  const user = useSelector((state: RootState) => state.userReducer.user);
  const [text, setText] = useState("");
  const [subject, setSubject] = useState("");
  const [mailInfo, setMailInfo] = useState<MailType>({
    from: "",
    to: "",
    text: "",
    date: "",
    subject: "",
    read: false,
  });
  const [mailIsPerfectMatch, setmailIsPerfectMatch] = useState(false);
  const [correctMail, setCorrectMail] = useState(false);
  const [sentSucees, setSentSucees] = useState(false);
  const [to, setTo] = useState("");
  const [allMails, setAllMails] = useState<string[]>([]);
  const [allMailsFiltered, setAllMailsFiltered] = useState<string[]>([]);
  const [toogleMailWriteMail, setToogleMailWriteMail] = useState(false);

  const date = shortenDateToString(new Date());
  console.log(date);

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

  const sendMailOnClick = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSentSucees(false);
    if (user?.email)
      setMailInfo({
        from: user?.email,
        to: to,
        text: text,
        date: date.date,
        subject: subject,
        read: false,
      });
    if (!mailIsPerfectMatch) {
      setCorrectMail(true);
    } else {
      sendMail(mailInfo);
      setCorrectMail(false);
      setText("");
      setSubject("");
      setTo("");
      setSentSucees(true);
    }
  };

  if (sentSucees) {
    setTimeout(() => {
      setSentSucees(false);
    }, 2000);
  }

  return (
    <styles.Container>
      <styles.Back onClick={() => setToogleMailPopUp(false)} />
      <styles.Pen onClick={() => setToogleMailWriteMail(true)} />
      <styles.Mail onClick={() => setToogleMailWriteMail(false)} />
      <styles.MailContainer>
        <styles.Form
          onSubmit={(e: React.FormEvent<HTMLFormElement>) => sendMailOnClick(e)}
        >
          <styles.TextArea
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
              setText(e.target.value)
            }
            required
            value={text}
          ></styles.TextArea>
          {sentSucees ? <styles.Label>Mail sent</styles.Label> : null}
          <styles.Input
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setSubject(e.target.value)
            }
            value={subject}
            placeholder='Subject'
            required
          />
          {correctMail ? (
            <styles.LabelWarning>Invalid mail</styles.LabelWarning>
          ) : null}
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
      {sentSucees ? <styles.SentMail key={Math.random()} /> : null}
    </styles.Container>
  );
};

export default MailPopUp;

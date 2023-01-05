import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getAllUsers } from "../../api/getAllUsers";
import { sendMail } from "../../api/sendMail";
import { RootState } from "../../redux/store";
import { MailType } from "../../types/mailTypes";
import { UserTypeWithNestedAdress } from "../../types/userType";
import { shortenDateToString } from "../../utils/shortenDateToString";
import Head from "../Helmet/Head";
import AllMails from "./allMails/AllMails";
import * as styles from "./mailPopUp.style";
import ReadMailPopUp from "./readMailPopUp/ReadMailPopUp";
import { checkIfmaiStartsWithRE } from "./utils/checkIfmaiStartsWithRE";

interface Props {
  setToogleMailPopUp: React.Dispatch<React.SetStateAction<boolean>>;
}

const MailPopUp = ({ setToogleMailPopUp }: Props) => {
  const resetMailInfo = {
    from: "",
    to: "",
    text: "",
    date: "",
    subject: "",
    read: false,
  };
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
  const [choosenMail, setChoosenMail] = useState<MailType | null>(null);
  const [mailIsPerfectMatch, setmailIsPerfectMatch] = useState(false);
  const [correctMail, setCorrectMail] = useState(false);
  const [sentSucees, setSentSucees] = useState(false);
  const [to, setTo] = useState("");
  const [allMails, setAllMails] = useState<string[]>([]);
  const [allMailsFiltered, setAllMailsFiltered] = useState<string[]>([]);
  const [toogleMailWriteMail, setToogleMailWriteMail] = useState(false);

  const date = shortenDateToString(new Date());
  console.log(choosenMail);

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
    } else if (to !== "") {
      if (user?.email)
        sendMail({
          from: user?.email,
          to: to,
          text: text,
          date: date.date,
          subject: subject,
          read: false,
        });

      setCorrectMail(false);
      setText("");
      setSubject("");
      setTo("");
      setSentSucees(true);
      setMailInfo(resetMailInfo);
      console.log(mailInfo);
    }
  };

  if (sentSucees) {
    setTimeout(() => {
      setSentSucees(false);
    }, 2000);
  }

  checkIfmaiStartsWithRE("RE: test");
  const tooglePenOnClick = () => {
    if (choosenMail !== null) {
      setTo(choosenMail.from);

      if (checkIfmaiStartsWithRE(choosenMail.subject)) {
        setSubject(`${choosenMail.subject}`);
      } else if (!checkIfmaiStartsWithRE(choosenMail.subject)) {
        setSubject(`RE: ${choosenMail.subject}`);
      }
    }
    setToogleMailWriteMail(true);
    setChoosenMail(null);
  };

  return (
    <styles.Container>
      <Head title='Mail' description='send mail' />
      <styles.Back onClick={() => setToogleMailPopUp(false)} />
      <styles.Pen onClick={() => tooglePenOnClick()} />
      <styles.Mail onClick={() => setToogleMailWriteMail(false)} />
      <styles.MailContainer>
        {choosenMail !== null ? (
          <ReadMailPopUp mail={choosenMail} setChoosenMail={setChoosenMail} />
        ) : null}
        {toogleMailWriteMail ? (
          <styles.Form
            onSubmit={(e: React.FormEvent<HTMLFormElement>) =>
              sendMailOnClick(e)
            }
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
                  return (
                    <styles.P onClick={() => setTo(mail)}>{mail}</styles.P>
                  );
                })}
              </styles.ShowMailAdresses>
            ) : null}
          </styles.Form>
        ) : (
          <AllMails choosenMail={choosenMail} setChoosenMail={setChoosenMail} />
        )}
      </styles.MailContainer>
      {sentSucees ? <styles.SentMail key={Math.random()} /> : null}
    </styles.Container>
  );
};

export default MailPopUp;

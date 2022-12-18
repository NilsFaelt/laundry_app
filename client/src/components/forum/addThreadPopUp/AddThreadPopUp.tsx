import { useState } from "react";
import { useSelector } from "react-redux";
import { addThread } from "../../../api/addThread";
import { RootState } from "../../../redux/store";
import { ThreadType } from "../../../types/threadTypes";
import { shortenDateToString } from "../../../utils/shortenDateToString";
import * as Styles from "./addThreadPopUp.styles";
import { filterThreadsNoDuplicates } from "./utils/filterThreadDuplicate";

interface Props {
  setTooglePopUpThread: React.Dispatch<React.SetStateAction<boolean>>;
  threads: ThreadType[];
}

const AddThreadPopUp: React.FC<Props> = ({ setTooglePopUpThread, threads }) => {
  const [threadDuplicate, setThreadDuplicate] = useState(true);
  const user = useSelector((state: RootState) => state.userReducer.user);
  const [threadName, setThreadName] = useState("nils");

  console.log(threadDuplicate, "duplicate");
  const readAbleDate = shortenDateToString(new Date());

  const sendThreadOnClick = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (filterThreadsNoDuplicates(threads, setThreadDuplicate, threadName)) {
      addThread({
        title: threadName,
        creator: user?.email || "noname",
        created: readAbleDate.date,
      });
      setThreadDuplicate(false);
      setTooglePopUpThread(false);
    }
  };

  return (
    <Styles.container>
      <Styles.Close onClick={() => setTooglePopUpThread(false)}></Styles.Close>
      <Styles.title>Add thread</Styles.title>
      <Styles.Form
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => sendThreadOnClick(e)}
      >
        <Styles.Label>Thread Name</Styles.Label>
        {!threadDuplicate ? (
          <Styles.Warning>Thread name already exsists</Styles.Warning>
        ) : null}
        <Styles.Input
          placeholder='ThreadName'
          value={threadName}
          required
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setThreadName(e.target.value)
          }
        />
        <Styles.Label>Created by User</Styles.Label>
        <Styles.Input defaultValue={user?.email} />
        <Styles.Btn>Add</Styles.Btn>
      </Styles.Form>
    </Styles.container>
  );
};

export default AddThreadPopUp;

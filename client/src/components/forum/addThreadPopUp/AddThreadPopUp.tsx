import { useState } from "react";
import { useSelector } from "react-redux";
import { addThread } from "../../../api/addThread";
import { RootState } from "../../../redux/store";
import { ThreadType } from "../../../types/threadTypes";
import * as Styles from "./addThreadPopUp.styles";

interface Props {
  setTooglePopUpThread: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddThreadPopUp: React.FC<Props> = ({ setTooglePopUpThread }) => {
  const user = useSelector((state: RootState) => state.userReducer.user);
  const [threadName, setThreadName] = useState("nils");

  const sendThreadOnClick = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addThread({ title: threadName, creator: user?.email || "noname" });
    setTooglePopUpThread(false);
  };

  return (
    <Styles.container>
      <Styles.Close onClick={() => setTooglePopUpThread(false)}></Styles.Close>
      <Styles.title>Add thread</Styles.title>
      <Styles.Form
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => sendThreadOnClick(e)}
      >
        <Styles.Label>Thread Name</Styles.Label>
        <Styles.Input
          placeholder='ThreadName'
          value={threadName}
          required
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setThreadName(e.target.value)
          }
        />
        <Styles.Label>Created by User</Styles.Label>
        <Styles.Input value={user?.email} />
        <Styles.Btn>Add</Styles.Btn>
      </Styles.Form>
    </Styles.container>
  );
};

export default AddThreadPopUp;

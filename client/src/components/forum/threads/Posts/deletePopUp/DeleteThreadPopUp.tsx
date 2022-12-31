import { useState } from "react";
import { deleteThread } from "../../../../../api/deleteThread";
import { deleteAllPosts } from "../../../../../api/removeAllPosts";
import * as styles from "./deletePopUp.stye";

interface Props {
  setactivateFetchPosts: React.Dispatch<React.SetStateAction<number>>;
  setChoosenThread: React.Dispatch<React.SetStateAction<string>>;
  setDeleteThreadPopUp: React.Dispatch<React.SetStateAction<boolean>>;
  threadName: string;
}

const DeleteThreadPopUp = ({
  setactivateFetchPosts,
  threadName,
  setDeleteThreadPopUp,
  setChoosenThread,
}: Props) => {
  const [sucesfullyDeleted, setSucesfullyDeleted] = useState(false);

  const deleteOnClick = async (threadName: string) => {
    const data = await deleteAllPosts(threadName);
    if (data) {
      const threadData = await deleteThread(threadName);
      console.log(threadData, "del data");
      if (threadData) {
        setSucesfullyDeleted(true);
      }
    }
  };

  const confirmDeleteOnClick = (
    setChoosenThread: React.Dispatch<React.SetStateAction<string>>
  ) => {
    setactivateFetchPosts((prev) => prev + 1);
    setChoosenThread("");
  };
  return (
    <styles.container>
      {sucesfullyDeleted ? (
        <styles.P>Thread deleted</styles.P>
      ) : (
        <styles.P>Sure you wanna delete thread?</styles.P>
      )}
      {sucesfullyDeleted ? (
        <styles.BtnDiv>
          <styles.PstvBtn
            onClick={() => confirmDeleteOnClick(setChoosenThread)}
          >
            Ok
          </styles.PstvBtn>
        </styles.BtnDiv>
      ) : (
        <styles.BtnDiv>
          <styles.PstvBtn onClick={() => deleteOnClick(threadName)}>
            Yes
          </styles.PstvBtn>
          <styles.DangerBtn
            onClick={() => {
              setDeleteThreadPopUp(false);
            }}
          >
            No
          </styles.DangerBtn>
        </styles.BtnDiv>
      )}
    </styles.container>
  );
};

export default DeleteThreadPopUp;

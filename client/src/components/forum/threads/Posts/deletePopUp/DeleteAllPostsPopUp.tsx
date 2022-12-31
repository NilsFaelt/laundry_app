import { useState } from "react";
import { deleteAllPosts } from "../../../../../api/removeAllPosts";
import * as styles from "./deletePopUp.stye";

interface Props {
  setDeleteAllPostsPopUp: React.Dispatch<React.SetStateAction<boolean>>;
  threadName: string;
}

const DeleteAllPostsPopUp = ({ setDeleteAllPostsPopUp, threadName }: Props) => {
  const [sucesfullyDeleted, setSucesfullyDeleted] = useState(false);
  const deleletOnClick = async (
    setDeleteAllPostsPopUp: React.Dispatch<React.SetStateAction<boolean>>,
    threadName: string
  ) => {
    const data = await deleteAllPosts(threadName);
    if (data) {
      setSucesfullyDeleted(true);
    }

    // setDeleteAllPostsPopUp(false);
  };

  return (
    <styles.container>
      {sucesfullyDeleted ? (
        <styles.P>All Posts sucessfully deleted</styles.P>
      ) : (
        <styles.P>Sure you wanna delete all posts?</styles.P>
      )}
      {sucesfullyDeleted ? (
        <styles.BtnDiv>
          <styles.PstvBtn onClick={() => setDeleteAllPostsPopUp(false)}>
            Ok
          </styles.PstvBtn>
        </styles.BtnDiv>
      ) : (
        <styles.BtnDiv>
          <styles.PstvBtn
            onClick={() => deleletOnClick(setDeleteAllPostsPopUp, threadName)}
          >
            Yes
          </styles.PstvBtn>
          <styles.DangerBtn onClick={() => setDeleteAllPostsPopUp(false)}>
            No
          </styles.DangerBtn>
        </styles.BtnDiv>
      )}
    </styles.container>
  );
};

export default DeleteAllPostsPopUp;

import { deletePost } from "../../../../../api/deletePost";
import { Post } from "../../../../../types/postType";
import * as styles from "./deletePopUp.stye";
interface Props {
  setDeletepostsPopUp: React.Dispatch<React.SetStateAction<boolean>>;
  setPosts: React.Dispatch<React.SetStateAction<Post[]>>;
  postId: string;
}

const DeletePopUp = ({ setDeletepostsPopUp, setPosts, postId }: Props) => {
  const deleletOnClick = async (postId: string) => {
    console.log(postId);
    deletePost(postId);
    setPosts((prev) => prev.filter((post) => post._id !== postId));
    setDeletepostsPopUp(false);
  };

  return (
    <styles.container>
      <styles.P>Sure you wanna delete post?</styles.P>
      <styles.BtnDiv>
        <styles.PstvBtn onClick={() => deleletOnClick(postId)}>
          Yes
        </styles.PstvBtn>
        <styles.DangerBtn onClick={() => setDeletepostsPopUp(false)}>
          No
        </styles.DangerBtn>
      </styles.BtnDiv>
    </styles.container>
  );
};

export default DeletePopUp;

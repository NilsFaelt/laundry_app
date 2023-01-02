import { Post } from "../../../../types/postType";
import { UserTypeWithNestedAdress } from "../../../../types/userType";
import * as styles from "./posts.styles";
import { deletePost } from "./utils/deletePost";

interface Props {
  post: Post;
  user: UserTypeWithNestedAdress | null;
  setPostId: React.Dispatch<React.SetStateAction<string>>;
  setDeletepostsPopUp: React.Dispatch<React.SetStateAction<boolean>>;
  setToogleMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const EachPost = ({
  post,
  user,
  setPostId,
  setDeletepostsPopUp,
  setToogleMenu,
}: Props) => {
  return (
    <styles.EachPostContainer key={post._id}>
      {user?.email === post.createdBy || user?.admin ? (
        <styles.Delete
          onClick={() => {
            deletePost(
              post._id!,
              setPostId,
              setDeletepostsPopUp,
              setToogleMenu
            );
          }}
        />
      ) : null}
      <styles.DateAndUserContaienr>
        <styles.User>{post.createdBy} says:</styles.User>
        <styles.Date>{post.date} </styles.Date>
      </styles.DateAndUserContaienr>
      <styles.Post>{post.post}</styles.Post>
    </styles.EachPostContainer>
  );
};

export default EachPost;

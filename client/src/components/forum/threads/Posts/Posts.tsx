import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { addPost } from "../../../../api/addPost";
import { getAllPosts } from "../../../../api/getAllPosts";
import { RootState } from "../../../../redux/store";
import { Post } from "../../../../types/postType";
import Spinner from "../../../../ui/loadingSpinner/Spinner";
import { shortenDateToString } from "../../../../utils/shortenDateToString";
import DeleteAllPostsPopUp from "./deletePopUp/DeleteAllPostsPopUp";
import DeletePopUp from "./deletePopUp/DeletePopUp";
import DeleteThreadPopUp from "./deletePopUp/DeleteThreadPopUp";
import EachPost from "./EachPost";
import * as styles from "./posts.styles";

// Sorry for the mess in this component
interface Props {
  setactivateFetchPosts: React.Dispatch<React.SetStateAction<number>>;
  setChoosenThread: React.Dispatch<React.SetStateAction<string>>;
  thread: string;
}
const Posts = ({ setChoosenThread, thread, setactivateFetchPosts }: Props) => {
  const [loadingPosts, setLoadingPosts] = useState(false);
  const [firstToogle, setFirstToggle] = useState(false);
  const [toogleMenu, setToogleMenu] = useState(false);
  const user = useSelector((state: RootState) => state.userReducer.user);
  const [deletePostsPopUp, setDeletepostsPopUp] = useState(false);
  const [deleteThreadPopUp, setDeleteThreadPopUp] = useState(false);
  const [deleteAllPostsPopUp, setDeleteAllPostsPopUp] = useState(false);
  const [posts, setPosts] = useState<Post[]>([]);
  const [postId, setPostId] = useState<string>("");
  const [input, setInput] = useState("");
  const chatBox = document.getElementById("chat-feed");

  const postOnClick = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input !== "" && typeof user?.email === "string") {
      const dateData = shortenDateToString(new Date());
      const post = {
        thread: thread,
        post: input,
        createdBy: user?.email,
        date: dateData.date,
        admin: false,
      };
      addPost(post);
      setPosts([...posts, post]);
      setInput("");
    }
  };

  const fetchWrapper = async () => {
    setLoadingPosts(true);
    const data = await getAllPosts(thread);

    if (data) {
      setPosts(data);
      setLoadingPosts(false);
    }
  };

  useEffect(() => {
    fetchWrapper();
  }, [deleteAllPostsPopUp]);

  if (chatBox) {
    chatBox.scrollTop = chatBox.scrollHeight;
  }
  useEffect(() => {
    if (chatBox) {
      chatBox.scrollTop = chatBox.scrollHeight;
    }
  }, [input]);

  const deleteAllPosts = async (
    thread: string,
    setToogleMenu: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    setDeleteAllPostsPopUp(true);
    setToogleMenu(false);
  };

  const deleteThread = (
    setDeleteThreadPopUp: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    setToogleMenu(false);
    setDeleteThreadPopUp(true);
  };

  const toogleMenuOnClick = () => {
    setFirstToggle(true);
    setToogleMenu(!toogleMenu);
  };

  return (
    <styles.Container>
      {user?.admin ? (
        <styles.HamBurger onClick={() => toogleMenuOnClick()} />
      ) : null}
      {toogleMenu ? (
        <styles.UserMenu>
          <styles.PostsLink onClick={() => deleteThread(setDeleteThreadPopUp)}>
            Delete Thread
          </styles.PostsLink>
          <styles.PostsLink
            onClick={() => deleteAllPosts(thread, setToogleMenu)}
          >
            Delete Posts
          </styles.PostsLink>
        </styles.UserMenu>
      ) : null}
      <styles.Form
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
          postOnClick(e);
        }}
      >
        <styles.PostContainer>
          {deleteThreadPopUp ? (
            <DeleteThreadPopUp
              setactivateFetchPosts={setactivateFetchPosts}
              setChoosenThread={setChoosenThread}
              setDeleteThreadPopUp={setDeleteThreadPopUp}
              threadName={thread}
            />
          ) : null}
          {deletePostsPopUp ? (
            <DeletePopUp
              postId={postId}
              setPosts={setPosts}
              setDeletepostsPopUp={setDeletepostsPopUp}
            />
          ) : null}
          {deleteAllPostsPopUp ? (
            <DeleteAllPostsPopUp
              threadName={thread}
              setDeleteAllPostsPopUp={setDeleteAllPostsPopUp}
            />
          ) : null}
          <styles.InnerPostContainer id='chat-feed'>
            {loadingPosts ? (
              <styles.SpinnerWrapper>
                <Spinner color='black' />
              </styles.SpinnerWrapper>
            ) : null}
            {!loadingPosts && posts.length < 1 ? (
              <styles.Info color='black'>No posts</styles.Info>
            ) : (
              ""
            )}
            {posts.map((post) => {
              return (
                <EachPost
                  post={post}
                  user={user}
                  setPostId={setPostId}
                  setDeletepostsPopUp={setDeletepostsPopUp}
                  setToogleMenu={setToogleMenu}
                />
              );
            })}
          </styles.InnerPostContainer>
        </styles.PostContainer>

        <styles.Input
          value={input}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setInput(e.target.value);
          }}
        ></styles.Input>
        <styles.Btn>POST</styles.Btn>
      </styles.Form>
    </styles.Container>
  );
};

export default Posts;

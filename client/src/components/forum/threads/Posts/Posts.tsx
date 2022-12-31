import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { addPost } from "../../../../api/addPost";
import { getAllPosts } from "../../../../api/getAllPosts";
import { RootState } from "../../../../redux/store";
import { Post } from "../../../../types/postType";
import { shortenDateToString } from "../../../../utils/shortenDateToString";
import DeleteAllPostsPopUp from "./deletePopUp/DeleteAllPostsPopUp";
import DeletePopUp from "./deletePopUp/DeletePopUp";
import * as styles from "./posts.styles";

interface Props {
  thread: string;
}
const Posts = ({ thread }: Props) => {
  const [firstToogle, setFirstToggle] = useState(false);
  const [toogleMenu, setToogleMenu] = useState(false);
  const user = useSelector((state: RootState) => state.userReducer.user);
  const [deletePostsPopUp, setDeletepostsPopUp] = useState(false);
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
    const data = await getAllPosts(thread);
    if (data) setPosts(data);
  };
  useEffect(() => {
    console.log("hej");
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

  const deletePost = (id: string) => {
    setPostId(id);
    setDeletepostsPopUp(true);
    setToogleMenu(false);
  };

  const deleteAllPosts = async (
    thread: string,
    setToogleMenu: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    setDeleteAllPostsPopUp(true);
    setToogleMenu(false);
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
      {firstToogle ? (
        <styles.UserMenu
          animation={toogleMenu ? "open-animation" : "close-animation"}
        >
          <styles.PostsLink
            animation={
              toogleMenu ? "open-animation-nav" : "close-animation-nav"
            }
          >
            Delete Thread
          </styles.PostsLink>
          <styles.PostsLink
            onClick={() => deleteAllPosts(thread, setToogleMenu)}
            animation={
              toogleMenu ? "open-animation-nav" : "close-animation-nav"
            }
          >
            Delete Posts
          </styles.PostsLink>
          <styles.PostsLink
            animation={
              toogleMenu ? "open-animation-nav" : "close-animation-nav"
            }
          >
            Add Popup
          </styles.PostsLink>
        </styles.UserMenu>
      ) : null}
      <styles.Form
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
          postOnClick(e);
        }}
      >
        <styles.PostContainer>
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
            {posts.map((post) => {
              return (
                <styles.EachPostContainer key={post._id}>
                  {user?.email === post.createdBy || user?.admin ? (
                    <styles.Delete
                      onClick={() => {
                        deletePost(post._id!);
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

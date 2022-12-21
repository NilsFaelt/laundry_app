import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { addPost } from "../../../../api/addPost";
import { getAllPosts } from "../../../../api/getAllPosts";
import { RootState } from "../../../../redux/store";
import { Post } from "../../../../types/postType";
import { shortenDateToString } from "../../../../utils/shortenDateToString";
import * as styles from "./posts.styles";
interface Props {
  thread: string;
}
const Posts = ({ thread }: Props) => {
  const user = useSelector((state: RootState) => state.userReducer.user);
  const [posts, setPosts] = useState<Post[]>([]);
  const [input, setInput] = useState("");
  const chatBox = document.getElementById("chat-feed");
  console.log(user);
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
    fetchWrapper();
  }, []);

  if (chatBox) {
    chatBox.scrollTop = chatBox.scrollHeight;
  }
  useEffect(() => {
    if (chatBox) {
      chatBox.scrollTop = chatBox.scrollHeight;
    }
  }, [input]);
  return (
    <styles.Container>
      <styles.SecondaryTitle>{}</styles.SecondaryTitle>
      <styles.Form
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
          postOnClick(e);
        }}
      >
        <styles.PostContainer id='chat-feed'>
          {posts.map((post) => {
            return (
              <styles.Post>
                {post.createdBy}: {post.post}
              </styles.Post>
            );
          })}
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

import { useEffect, useState } from "react";
import { addPost } from "../../../../api/addPost";
import { getAllPosts } from "../../../../api/getAllPosts";
import { Post } from "../../../../types/postType";
import { ThreadType } from "../../../../types/threadTypes";
import { shortenDateToString } from "../../../../utils/shortenDateToString";
import * as styles from "./posts.styles";
interface Props {
  thread: string;
}
const Posts = ({ thread }: Props) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [input, setInput] = useState("");
  const postOnClick = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input !== "") {
      const dateData = shortenDateToString(new Date());
      const post = {
        thread: thread,
        post: input,
        createdBy: "test",
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
  return (
    <styles.Container>
      <styles.SecondaryTitle>{}</styles.SecondaryTitle>
      <styles.Form
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
          postOnClick(e);
        }}
      >
        <styles.PostContainer>
          {posts.map((post) => {
            return <styles.Post>{post.post}</styles.Post>;
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

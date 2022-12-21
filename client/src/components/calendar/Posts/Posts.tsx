import { useState } from "react";
import * as styles from "./posts.styles";

const Posts = () => {
  const [input, setInput] = useState("");
  const postOnClick = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input !== "") {
      setInput("");
    }
  };
  console.log(input);
  return (
    <styles.Container>
      <styles.SecondaryTitle>{}</styles.SecondaryTitle>
      <styles.Form
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
          postOnClick(e);
        }}
      >
        <styles.PostContainer></styles.PostContainer>
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

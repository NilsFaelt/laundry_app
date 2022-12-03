import * as styles from "./forum.styles";

const Forum = () => {
  return (
    <styles.BackgroundContainer>
      <styles.Container>
        <styles.Title>Bulletin Board</styles.Title>
        <styles.TreadsAndPoststContainer>
          <styles.ThreadsContainer>
            <styles.SecondaryTitle>Threads</styles.SecondaryTitle>
          </styles.ThreadsContainer>
          <styles.PostsContainer>
            <styles.SecondaryTitle>Posts</styles.SecondaryTitle>
          </styles.PostsContainer>
        </styles.TreadsAndPoststContainer>
      </styles.Container>
    </styles.BackgroundContainer>
  );
};

export default Forum;

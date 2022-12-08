import { useEffect, useState } from "react";
import { getAllThreads } from "../../api/getAllThreads";
import { ThreadType } from "../../types/threadTypes";
import AddThreadPopUp from "./addThreadPopUp/AddThreadPopUp";
import * as styles from "./forum.styles";
import EachThread from "./threads/EachThread";

const Forum = () => {
  const [threads, setThreads] = useState<ThreadType[]>([]);
  const [tooglePopUpThread, setTooglePopUpThread] = useState(false);
  const getAllthreadsFn = async () => {
    const data: ThreadType[] | null = await getAllThreads();
    if (data !== null) setThreads(data);
  };
  useEffect(() => {
    getAllthreadsFn();
  }, []);

  return (
    <styles.BackgroundContainer>
      {tooglePopUpThread ? (
        <AddThreadPopUp setTooglePopUpThread={setTooglePopUpThread} />
      ) : null}
      <styles.Container>
        <styles.Title>Bulletin Board</styles.Title>
        <styles.TreadsAndPoststContainer>
          <styles.ThreadsContaineWrapper>
            <styles.ThreadsContainer>
              <styles.SecondaryTitle>Threads</styles.SecondaryTitle>
              {threads?.map((thread) => {
                return <EachThread thread={thread} />;
              })}
            </styles.ThreadsContainer>
            <styles.Btn onClick={() => setTooglePopUpThread(true)}>
              Add Thread
            </styles.Btn>
          </styles.ThreadsContaineWrapper>
          <styles.PostsContainer>
            <styles.SecondaryTitle>Posts</styles.SecondaryTitle>
          </styles.PostsContainer>
        </styles.TreadsAndPoststContainer>
      </styles.Container>
    </styles.BackgroundContainer>
  );
};

export default Forum;

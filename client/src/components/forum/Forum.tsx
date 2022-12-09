import { useEffect, useState } from "react";
import { getAllThreads } from "../../api/getAllThreads";
import { ThreadType } from "../../types/threadTypes";
import AddThreadPopUp from "./addThreadPopUp/AddThreadPopUp";
import * as styles from "./forum.styles";
import EachThread from "./threads/EachThread";

const Forum = () => {
  const [threads, setThreads] = useState<ThreadType[]>([]);
  const [filteredThreads, setFilteredThreads] = useState<ThreadType[]>([]);
  const [tooglePopUpThread, setTooglePopUpThread] = useState(false);
  const [inputSearch, setInputSearch] = useState("");
  const getAllthreadsFn = async () => {
    const data: ThreadType[] | null = await getAllThreads();
    if (data !== null) {
      setThreads(data);
      setFilteredThreads(data);
    }
  };
  useEffect(() => {
    getAllthreadsFn();
  }, []);

  const filterThreads = (
    threads: ThreadType[],
    setFilteredThreads: React.Dispatch<React.SetStateAction<ThreadType[]>>,
    inputSearch: string
  ) => {
    useEffect(() => {
      const filtererdThreads = threads?.filter((thread) =>
        thread.title.includes(inputSearch)
      );
      if (inputSearch !== "" && filtererdThreads.length > 0)
        setFilteredThreads(filtererdThreads);
      else setFilteredThreads(threads);
    }, [inputSearch]);
  };
  filterThreads(threads, setFilteredThreads, inputSearch);

  return (
    <styles.BackgroundContainer>
      {tooglePopUpThread ? (
        <AddThreadPopUp
          setTooglePopUpThread={setTooglePopUpThread}
          threads={threads}
        />
      ) : null}
      <styles.Container>
        <styles.Title>Bulletin Board</styles.Title>
        <styles.TreadsAndPoststContainer>
          <styles.ThreadsContaineWrapper>
            <styles.ThreadsContainer>
              <styles.SecondaryTitle>Threads</styles.SecondaryTitle>
              <styles.Input
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setInputSearch(e.target.value)
                }
                placeholder='Search thread'
              />
              <styles.ThreadsContainerScroll>
                {filteredThreads?.map((thread) => {
                  return <EachThread thread={thread} />;
                })}
              </styles.ThreadsContainerScroll>
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

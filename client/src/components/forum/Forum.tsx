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
            <styles.Input
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setInputSearch(e.target.value)
              }
              placeholder='Search thread'
            />
            <styles.ThreadsHeader>
              <styles.SecondaryTitle>Thread:</styles.SecondaryTitle>
              <styles.SecondaryTitle>Date:</styles.SecondaryTitle>
              <styles.SecondaryTitle>CreatedBy:</styles.SecondaryTitle>
            </styles.ThreadsHeader>
            <styles.ThreadsContainerScroll>
              {filteredThreads?.map((thread) => {
                return <EachThread key={thread._id} thread={thread} />;
              })}
            </styles.ThreadsContainerScroll>

            <styles.Btn onClick={() => setTooglePopUpThread(true)}>
              Add Thread
            </styles.Btn>
          </styles.ThreadsContaineWrapper>
        </styles.TreadsAndPoststContainer>
      </styles.Container>
    </styles.BackgroundContainer>
  );
};

export default Forum;

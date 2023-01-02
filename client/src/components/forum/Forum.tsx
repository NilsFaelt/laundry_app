import { useEffect, useState } from "react";
import { getAllThreads } from "../../api/getAllThreads";
import { ThreadType } from "../../types/threadTypes";
import Posts from "./threads/Posts/Posts";
import AddThreadPopUp from "./addThreadPopUp/AddThreadPopUp";
import * as styles from "./forum.styles";
import ThreadsContainer from "./threadsContainer/ThreadsContainer";
import Head from "../Helmet/Head";

const Forum = () => {
  const [activateFetchPosts, setactivateFetchPosts] = useState(0);
  const [choosenThread, setChoosenThread] = useState<string>("");
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
  }, [tooglePopUpThread, activateFetchPosts]);

  const filterThreads = (
    threads: ThreadType[],
    setFilteredThreads: React.Dispatch<React.SetStateAction<ThreadType[]>>,
    inputSearch: string
  ) => {
    useEffect(() => {
      const filtererdThreads = threads?.filter((thread) =>
        thread.title
          .toLocaleLowerCase()
          .includes(inputSearch.toLocaleLowerCase())
      );

      if (inputSearch !== "" && filtererdThreads.length > 0)
        setFilteredThreads(filtererdThreads);
      else setFilteredThreads(threads);
    }, [inputSearch]);
  };

  filterThreads(threads, setFilteredThreads, inputSearch);

  return (
    <styles.BackgroundContainer>
      <Head title='bulletinboard' />
      {tooglePopUpThread ? (
        <AddThreadPopUp
          setChoosenThread={setChoosenThread}
          setTooglePopUpThread={setTooglePopUpThread}
          threads={threads}
        />
      ) : null}
      <styles.Container>
        {choosenThread ? (
          <styles.Back onClick={() => setChoosenThread("")} />
        ) : null}
        <styles.Title>Bulletin Board</styles.Title>
        <styles.SecondaryTitle>Thread: {choosenThread} </styles.SecondaryTitle>
      </styles.Container>
      {choosenThread === "" ? (
        <ThreadsContainer
          inputSearch={inputSearch}
          setChoosenThread={setChoosenThread}
          setInputSearch={setInputSearch}
          filteredThreads={filteredThreads}
          setTooglePopUpThread={setTooglePopUpThread}
        />
      ) : (
        <Posts
          setactivateFetchPosts={setactivateFetchPosts}
          thread={choosenThread}
          setChoosenThread={setChoosenThread}
        />
      )}
    </styles.BackgroundContainer>
  );
};

export default Forum;

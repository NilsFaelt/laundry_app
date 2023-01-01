import * as styles from "./threadsContainer.style";
import EachThread from "../threads/EachThread";
import { ThreadType } from "../../../types/threadTypes";
import Pagination from "../pagination/Pagination";
import { useEffect, useState } from "react";
import { getPaginationInfo } from "../pagination/utils/getPaginationInfo";
import Spinner from "../../../ui/loadingSpinner/Spinner";

interface Props {
  inputSearch: string;
  setInputSearch: React.Dispatch<React.SetStateAction<string>>;
  filteredThreads: ThreadType[];
  setTooglePopUpThread: React.Dispatch<React.SetStateAction<boolean>>;
  setChoosenThread: React.Dispatch<React.SetStateAction<string>>;
}

const ThreadsContainer = ({
  setInputSearch,
  filteredThreads,
  setTooglePopUpThread,
  setChoosenThread,
  inputSearch,
}: Props) => {
  const [page, setPage] = useState(1);
  const [pagePerSide, setPagePerSide] = useState(3);
  const paginatedArray = getPaginationInfo(filteredThreads, page, pagePerSide);

  useEffect(() => {
    setPage(1);
  }, [inputSearch]);

  return (
    <styles.TreadsAndPoststContainer>
      <styles.ThreadsContaineWrapper>
        <styles.Input
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setInputSearch(e.target.value)
          }
          placeholder='Search thread'
        />
        {filteredThreads.length >= 1 ? null : <Spinner color='black' />}
        <styles.ThreadsContainerScroll>
          {paginatedArray.slicedArray?.map((thread, i) => {
            return (
              <EachThread
                setChoosenThread={setChoosenThread}
                key={thread._id}
                thread={thread}
                index={i}
              />
            );
          })}
        </styles.ThreadsContainerScroll>
        <Pagination
          paginatedArray={paginatedArray}
          setPage={setPage}
          page={page}
          pagePerSide={pagePerSide}
          filteredThreads={filteredThreads}
        />
        <styles.Btn onClick={() => setTooglePopUpThread(true)}>
          Add Thread
        </styles.Btn>
      </styles.ThreadsContaineWrapper>
    </styles.TreadsAndPoststContainer>
  );
};

export default ThreadsContainer;

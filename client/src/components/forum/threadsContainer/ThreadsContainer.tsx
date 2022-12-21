import * as styles from "./threadsContainer.style";
import EachThread from "../threads/EachThread";
import { ThreadType } from "../../../types/threadTypes";
import Pagination from "../pagination/Pagination";
import { useState } from "react";
import { getPaginationInfo } from "../pagination/utils/getPaginationInfo";

interface Props {
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
}: Props) => {
  const [page, setPage] = useState(1);
  const [pagePerSide, setPagePerSide] = useState(4);
  const paginatedArray = getPaginationInfo(filteredThreads, page, pagePerSide);

  return (
    <styles.TreadsAndPoststContainer>
      <styles.ThreadsContaineWrapper>
        <styles.Input
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setInputSearch(e.target.value)
          }
          placeholder='Search thread'
        />
        {/* <styles.ThreadsHeader>
          <styles.SecondaryTitle>Thread:</styles.SecondaryTitle>
          <styles.SecondaryTitle>Date:</styles.SecondaryTitle>
          <styles.SecondaryTitle>CreatedBy:</styles.SecondaryTitle> */}
        {/* </styles.ThreadsHeader> */}
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
        />
        <styles.Btn onClick={() => setTooglePopUpThread(true)}>
          Add Thread
        </styles.Btn>
      </styles.ThreadsContaineWrapper>
    </styles.TreadsAndPoststContainer>
  );
};

export default ThreadsContainer;

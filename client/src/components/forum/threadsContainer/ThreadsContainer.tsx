import * as styles from "./threadsContainer.style";
import EachThread from "../threads/EachThread";
import { ThreadType } from "../../../types/threadTypes";

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
  return (
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
            return (
              <EachThread
                setChoosenThread={setChoosenThread}
                key={thread._id}
                thread={thread}
              />
            );
          })}
        </styles.ThreadsContainerScroll>

        <styles.Btn onClick={() => setTooglePopUpThread(true)}>
          Add Thread
        </styles.Btn>
      </styles.ThreadsContaineWrapper>
    </styles.TreadsAndPoststContainer>
  );
};

export default ThreadsContainer;

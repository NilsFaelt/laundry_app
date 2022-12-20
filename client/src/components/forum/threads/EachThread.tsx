import { ThreadType } from "../../../types/threadTypes";
import * as Styles from "./eachThread.styles";
interface Props {
  thread: ThreadType;
  setChoosenThread: React.Dispatch<React.SetStateAction<string>>;
}
const EachThread: React.FC<Props> = ({ thread, setChoosenThread }) => {
  return (
    <Styles.Container
      onClick={() => {
        setChoosenThread(thread.title);
      }}
      key={thread._id}
    >
      <Styles.Title>{thread.title}</Styles.Title>
      <Styles.Date>{thread.created}</Styles.Date>
      <Styles.Email>{thread.creator}</Styles.Email>
    </Styles.Container>
  );
};

export default EachThread;

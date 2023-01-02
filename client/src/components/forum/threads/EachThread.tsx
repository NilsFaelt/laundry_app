import { ThreadType } from "../../../types/threadTypes";
import * as Styles from "./eachThread.styles";
interface Props {
  thread: ThreadType;
  setChoosenThread: React.Dispatch<React.SetStateAction<string>>;
  index: number;
}
const EachThread: React.FC<Props> = ({ thread, setChoosenThread, index }) => {
  return (
    <Styles.Container
      margin={index === 0 ? "300" : "10"}
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

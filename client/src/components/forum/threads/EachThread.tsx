import { ThreadType } from "../../../types/threadTypes";
import * as Styles from "./eachThread.styles";
interface Props {
  thread: ThreadType;
}
const EachThread: React.FC<Props> = ({ thread }) => {
  return (
    <Styles.Container key={thread._id}>
      <Styles.Title>{thread.title}</Styles.Title>
      <Styles.Date>{thread.created}</Styles.Date>
      <Styles.Email>{thread.creator}</Styles.Email>
    </Styles.Container>
  );
};

export default EachThread;

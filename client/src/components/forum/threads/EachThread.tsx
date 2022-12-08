import { ThreadType } from "../../../types/threadTypes";
import * as Styles from "./eachThread.styles";
interface Props {
  thread: ThreadType;
}
const EachThread: React.FC<Props> = ({ thread }) => {
  return (
    <Styles.Container>
      <Styles.Title>{thread.title}</Styles.Title>
    </Styles.Container>
  );
};

export default EachThread;

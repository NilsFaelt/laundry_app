import { ThreadType } from "../../../types/threadTypes";
import * as Styles from "./eachThread.styles";
interface Props {
  thread: ThreadType;
}
const EachThread: React.FC<Props> = ({ thread }) => {
  return (
    <Styles.Container key={thread._id}>
      <Styles.Title>{thread.title}</Styles.Title>
      <Styles.DateAndEmail>{thread.created}</Styles.DateAndEmail>
      <Styles.DateAndEmail>{thread.creator}</Styles.DateAndEmail>
    </Styles.Container>
  );
};

export default EachThread;

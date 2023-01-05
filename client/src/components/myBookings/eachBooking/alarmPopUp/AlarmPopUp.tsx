import * as styles from "./alarmPopUp.style";
interface Props {
  setToolgeAlarm: React.Dispatch<React.SetStateAction<boolean>>;
}
const AlarmPopUp = ({ setToolgeAlarm }: Props) => {
  return (
    <styles.Container>
      <styles.Close onClick={() => setToolgeAlarm(false)} />
    </styles.Container>
  );
};

export default AlarmPopUp;

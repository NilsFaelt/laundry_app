import * as styles from "./alarmPopUp.style";
import { MainBtn } from "../../../../styles/globalStyles";
interface Props {
  setToolgeAlarm: React.Dispatch<React.SetStateAction<boolean>>;
}
const AlarmPopUp = ({ setToolgeAlarm }: Props) => {
  return (
    <styles.Container>
      <styles.Close onClick={() => setToolgeAlarm(false)} />
      <styles.Title>Set Alarm</styles.Title>
      <styles.BtnDiv>
        <MainBtn>15 min before</MainBtn>
        <MainBtn>30 min before</MainBtn>
        <MainBtn>1 hour before</MainBtn>
      </styles.BtnDiv>
    </styles.Container>
  );
};

export default AlarmPopUp;

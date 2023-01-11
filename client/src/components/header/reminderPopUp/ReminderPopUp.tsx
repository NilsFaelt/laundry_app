import { useState } from "react";
import { Ireminder } from "../../../types/reminderTypes";
import * as styles from "./reminderPopUp.style";
import { Close } from "../../myBookings/bookingLimitPopUp/bookingLimitPopUp.style";

interface Props {
  reminder: Ireminder;
  setReminder: React.Dispatch<React.SetStateAction<Ireminder | null>>;
}
const ReminderPopUp = ({ reminder, setReminder }: Props) => {
  const [toogleBigMessage, setToogleBigMessage] = useState(false);
  return (
    <styles.Container
      toogleBigMessage={toogleBigMessage}
      onClick={() => setToogleBigMessage(true)}
    >
      {toogleBigMessage && <Close onClick={() => setReminder(null)} />}
      {!toogleBigMessage && <styles.MessageTitle>Message</styles.MessageTitle>}
      {!toogleBigMessage && <styles.ClickMe>Click me</styles.ClickMe>}
      <styles.TextContainer toogleBigMessage={toogleBigMessage}>
        <styles.MessageTitleOpen toogleBigMessage={toogleBigMessage}>
          {reminder.title}
        </styles.MessageTitleOpen>
        <styles.P toogleBigMessage={toogleBigMessage}>{reminder.text}</styles.P>
        {reminder.from !== "" ? (
          <styles.PFrom>/ {reminder.from}</styles.PFrom>
        ) : null}
      </styles.TextContainer>
    </styles.Container>
  );
};

export default ReminderPopUp;

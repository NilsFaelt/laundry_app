import { colors } from "../../../styles/colors";
import { BookedLaundrytimes } from "../../../types/laundryTypes";
import * as styles from "./eachBooking.styles";

interface Props {
  info: BookedLaundrytimes;
}
//delete booked time
//Clean upp code
const EachBooking: React.FC<Props> = ({ info }) => {
  const test = true;
  return (
    <styles.container>
      <styles.Close></styles.Close>
      <styles.Title>{info?.bookedHours}</styles.Title>
      <styles.Title>{info?.dateForBooking}</styles.Title>
      <styles.TitleBooked></styles.TitleBooked>
    </styles.container>
  );
};

export default EachBooking;

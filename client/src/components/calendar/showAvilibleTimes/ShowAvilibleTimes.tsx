import { colors } from "../../../styles/colors";
import { LaundryTimes } from "../../../types/laundryTypes";
import * as styles from "./showAvilibleTimes.styles";

interface Props {
  bookedTime: LaundryTimes;
}
const ShowAvilibleTimes: React.FC<Props> = ({ bookedTime }) => {
  return (
    <styles.container
      cursor={bookedTime.availible ? "pointer" : ""}
      color={bookedTime.availible ? colors.bluePositive : ""}
    >
      <styles.Title>{bookedTime.timeAsString}</styles.Title>
      {bookedTime.availible ? (
        <styles.Title>Available</styles.Title>
      ) : (
        <styles.TitleBooked>Booked</styles.TitleBooked>
      )}
    </styles.container>
  );
};

export default ShowAvilibleTimes;

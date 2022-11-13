import { colors } from "../../../styles/colors";
import { LaundryTimes } from "../../../types/laundryTypes";
import * as styles from "./showAvilibleTimes.styles";

interface Props {
  bookedTime: LaundryTimes;
  handleBookTimeClick: (time: LaundryTimes) => void;
}
const ShowAvilibleTimes: React.FC<Props> = ({
  bookedTime,
  handleBookTimeClick,
}) => {
  return (
    <styles.container
      onClick={() => handleBookTimeClick(bookedTime)}
      cursor={bookedTime.availible ? "pointer" : "none"}
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

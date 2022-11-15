import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getBookedTimesByUser } from "../../../api/getTimesByUser";
import { RootState } from "../../../redux/store";
import { colors } from "../../../styles/colors";
import { LaundryTimes } from "../../../types/laundryTypes";
import { ShowAvailibleTimesProps } from "../../../types/ShowAvilibleTimesProps";
import { UserTypeWithNestedAdress } from "../../../types/userType";
import * as styles from "./showAvilibleTimes.styles";
import { fetchWrapper } from "./utils/fetchWrappe";

const ShowAvilibleTimes: React.FC<ShowAvailibleTimesProps> = ({
  bookedTime,
  handleBookTimeClick,
}) => {
  const user: UserTypeWithNestedAdress | null = useSelector(
    (state: RootState) => state.userReducer
  );
  const [usersBookedLimit, setusersBookedLimit] = useState<LaundryTimes[]>([]);

  useEffect(() => {
    fetchWrapper(user, setusersBookedLimit);
  }, []);

  return (
    <styles.container
      onClick={() => handleBookTimeClick(bookedTime)}
      cursor={
        bookedTime.availible && usersBookedLimit?.length < 3
          ? "pointer"
          : "none"
      }
      color={bookedTime.availible ? colors.bluePositive : ""}
    >
      <styles.Title>{bookedTime.timeAsString}</styles.Title>
      {bookedTime.availible ? (
        <styles.Title>Available</styles.Title>
      ) : (
        <styles.TitleBooked>Booked</styles.TitleBooked>
      )}
      {usersBookedLimit.length === 3 ? (
        <styles.TitleBooked>Your bookings limit is full</styles.TitleBooked>
      ) : null}
    </styles.container>
  );
};

export default ShowAvilibleTimes;

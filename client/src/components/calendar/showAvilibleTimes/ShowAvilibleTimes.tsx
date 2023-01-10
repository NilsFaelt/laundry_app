import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { colors } from "../../../styles/colors";
import { BookedLaundrytimes } from "../../../types/laundryTypes";
import { ShowAvailibleTimesProps } from "../../../types/ShowAvilibleTimesProps";
import { UserTypeWithNestedAdress } from "../../../types/userType";
import { checkSoDateIsStillRelevant } from "../utils/checkSodateIsStillRelevant";
import * as styles from "./showAvilibleTimes.styles";
import { fetchWrapper } from "./utils/fetchWrappe";

const ShowAvilibleTimes: React.FC<ShowAvailibleTimesProps> = ({
  bookedTime,
  handleBookTimeClick,
  date,
}) => {
  const user: UserTypeWithNestedAdress | null = useSelector(
    (state: RootState) => state.userReducer.user
  );
  const bookingLimit = useSelector(
    (state: RootState) => state.settingsReducer.bookingLimit
  );
  const [usersBookedLimit, setusersBookedLimit] = useState<
    BookedLaundrytimes[]
  >([]);
  const dateRelevance = checkSoDateIsStillRelevant(date);

  useEffect(() => {
    fetchWrapper(user, setusersBookedLimit);
  }, []);

  return (
    <styles.container
      onClick={() => handleBookTimeClick(bookedTime)}
      cursor={
        bookedTime.availible &&
        usersBookedLimit?.length < bookingLimit &&
        dateRelevance
          ? "pointer"
          : "none"
      }
      color={bookedTime.availible ? colors.bluePositive : ""}
    >
      <styles.Title>{bookedTime.timeAsString}</styles.Title>
      {bookedTime.availible ? (
        dateRelevance ? (
          <styles.Title>Available</styles.Title>
        ) : (
          <styles.TitleBooked>Date has already passed</styles.TitleBooked>
        )
      ) : (
        <styles.TitleBooked>Booked</styles.TitleBooked>
      )}
      {usersBookedLimit.length === bookingLimit ? (
        <>
          <styles.TitleBooked>Your bookings limit is full</styles.TitleBooked>
        </>
      ) : null}
    </styles.container>
  );
};

export default ShowAvilibleTimes;

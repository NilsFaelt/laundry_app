import { useDispatch, useSelector } from "react-redux";
import * as styles from "./navbar.styles";
import { RootState } from "../../redux/store";
import { colors } from "../../styles/colors";
import {
  activateBooking,
  activateCalendar,
  activateChat,
} from "../../redux/menuSlice";

const Navbar = () => {
  const { calendar, bookings, chat } = useSelector(
    (state: RootState) => state.showActiveMenuReducer
  );
  const bookeTimes = useSelector(
    (state: RootState) => state.bookedTimesReducer.bookedTimes
  );

  const dispatch = useDispatch();

  return (
    <styles.Container>
      <styles.Link to={"/calendar"}>
        <styles.Calendar
          onClick={() => dispatch(activateCalendar())}
          color={calendar ? colors.showActiveLink : "white"}
        ></styles.Calendar>
      </styles.Link>
      <styles.Link to={"/myBooking"}>
        {bookeTimes.length > 0 ? (
          <styles.ShowBookingDiv>{bookeTimes.length}</styles.ShowBookingDiv>
        ) : null}
        <styles.MyBookings
          onClick={() => dispatch(activateBooking())}
          color={bookings ? colors.showActiveLink : "white"}
        ></styles.MyBookings>
      </styles.Link>
      <styles.Link to={"/forum"}>
        <styles.Forum
          onClick={() => dispatch(activateChat())}
          color={chat ? colors.showActiveLink : "white"}
        ></styles.Forum>
      </styles.Link>
    </styles.Container>
  );
};

export default Navbar;

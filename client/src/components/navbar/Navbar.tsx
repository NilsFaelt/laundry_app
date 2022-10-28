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
  const dispatch = useDispatch();

  return (
    <styles.Container>
      <styles.Link to={"/myBooking"}>
        <styles.Calendar
          onClick={() => dispatch(activateCalendar())}
          color={calendar ? colors.activePositive : "white"}
        ></styles.Calendar>
      </styles.Link>
      <styles.Link to={"/myBooking"}>
        <styles.MyBookings
          onClick={() => dispatch(activateBooking())}
          color={bookings ? colors.activePositive : "white"}
        ></styles.MyBookings>
      </styles.Link>
      <styles.Link to={"/myBooking"}>
        <styles.Forum
          onClick={() => dispatch(activateChat())}
          color={chat ? colors.activePositive : "white"}
        ></styles.Forum>
      </styles.Link>
    </styles.Container>
  );
};

export default Navbar;

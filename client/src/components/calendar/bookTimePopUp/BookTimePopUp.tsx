import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { bookALaundryTime } from "../../../api/bookALaundryTime";
import { activateBooking } from "../../../redux/menuSlice";
import { RootState } from "../../../redux/store";
import { DateObj } from "../../../types/dateTypes";
import { BookingInfo, LaundryTimes } from "../../../types/laundryTypes";
import { UserTypeWithNestedAdress } from "../../../types/userType";
import * as styles from "./bookTimePopUp.style";
import { handleBookingOnClick } from "./utils/handkeBookingOnclick";

interface Props {
  date: Date;
  dateString: string;
  bookedTime: LaundryTimes | null;
  readebleDate: DateObj;
  setToogleBookPopUp: React.Dispatch<React.SetStateAction<boolean>>;
}

const BookTimePopUp: React.FC<Props> = ({
  dateString,
  bookedTime,
  readebleDate,
  setToogleBookPopUp,
  date,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const toogleMenu = useSelector(
    (state: RootState) => state.showActiveMenuReducer
  );
  const user: UserTypeWithNestedAdress | null = useSelector(
    (state: any) => state.userReducer.user
  );
  const [bookingInfo, setBookingInfo] = useState<BookingInfo>({
    laundryRoom: "default",
    dateForBooking: dateString,
    email: user?.email || "no mail found",
    name: user?.name || "no name found",
    bookedHours: bookedTime?.time || 710,
    dateAsMilisecs: date.getTime(),
  });

  return (
    <styles.Container>
      <styles.P>
        <styles.Span>Time:</styles.Span> {bookedTime?.timeAsString}
      </styles.P>
      <styles.Pdate>
        <styles.Span>Date:</styles.Span> {readebleDate.day}-{readebleDate.month}
        -{readebleDate.year}
      </styles.Pdate>
      <styles.BtnDiv>
        <styles.PstvBtn
          onClick={() =>
            handleBookingOnClick(user, bookingInfo, navigate, dispatch)
          }
        >
          book
        </styles.PstvBtn>
        <styles.DangerBtn onClick={() => setToogleBookPopUp(false)}>
          Close
        </styles.DangerBtn>
      </styles.BtnDiv>
    </styles.Container>
  );
};

export default BookTimePopUp;

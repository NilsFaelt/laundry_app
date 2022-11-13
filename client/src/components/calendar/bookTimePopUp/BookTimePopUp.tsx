import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { bookALaundryTime } from "../../../api/bookALaundryTime";
import { LaundryTimes } from "../../../types/laundryTypes";
import { UserTypeWithNestedAdress } from "../../../types/userType";
import * as styles from "./bookTimePopUp.style";

interface Props {
  bookedTime: LaundryTimes | null;
  dateString: string;
  setToogleBookPopUp: React.Dispatch<React.SetStateAction<boolean>>;
}
interface BookingInfo {
  laundryRoom: string;
  dateForBooking: string;
  email: string;
  name: string;
  bookedHours: number;
}

const BookTimePopUp: React.FC<Props> = ({
  bookedTime,
  dateString,
  setToogleBookPopUp,
}) => {
  const navigate = useNavigate();
  const user: UserTypeWithNestedAdress | null = useSelector(
    (state: any) => state.userReducer
  );

  const [bookingInfo, setBookingInfo] = useState<BookingInfo>({
    laundryRoom: "default",
    dateForBooking: dateString,
    email: user?.email || "no mail found",
    name: user?.name || "no name found",
    bookedHours: bookedTime?.time || 710,
  });
  const handleBookingOnClick = async () => {
    if (typeof user?.email === "string" && typeof user?.name === "string") {
      const response = await bookALaundryTime(bookingInfo);
      if (response.booking) {
        navigate("/myBooking");
      }
    }
  };

  return (
    <styles.Container>
      <styles.P>Book time: {bookedTime?.timeAsString}</styles.P>
      <styles.Pdate>Date: {dateString}</styles.Pdate>
      <styles.BtnDiv>
        <styles.PstvBtn onClick={() => handleBookingOnClick()}>
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

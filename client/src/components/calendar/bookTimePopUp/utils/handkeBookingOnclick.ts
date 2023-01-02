import { Dispatch } from "react";
import { NavigateFunction } from "react-router-dom";
import { bookALaundryTime } from "../../../../api/bookALaundryTime";
import { activateBooking } from "../../../../redux/menuSlice";
import { BookingInfo } from "../../../../types/laundryTypes";
import { UserTypeWithNestedAdress } from "../../../../types/userType";

export const handleBookingOnClick = async (
  user: UserTypeWithNestedAdress | null,
  bookingInfo: BookingInfo,
  navigate: NavigateFunction,
  dispatch: Dispatch<any>
) => {
  if (typeof user?.email === "string" && typeof user?.name === "string") {
    const response = await bookALaundryTime(bookingInfo);
    if (response.booking) {
      navigate("/myBooking");
      dispatch(activateBooking());
    }
  }
};

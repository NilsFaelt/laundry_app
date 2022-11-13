import { useState } from "react";
import { useSelector } from "react-redux";
import { BookedLaundrytimes, LaundryTimes } from "../../types/laundryTypes";
import { UserTypeWithNestedAdress } from "../../types/userType";
import EachBooking from "./eachBooking/EachBooking";
import { useGetTimeByUser } from "./hook/useGetTimeByUser";
import * as styles from "./myBookings.style";

const MyBookings = () => {
  const [myBookedTimes, setmyBookedTimes] = useState(null);
  const user: UserTypeWithNestedAdress | null = useSelector(
    (state: any) => state.userReducer
  );
  let bookedTimes: any = null;
  if (user?.email) bookedTimes = useGetTimeByUser(user?.email);
  console.log(bookedTimes.data, "booked");
  return (
    <styles.BackgroundContainer>
      <styles.Container>
        <styles.Title>Myb booked laundrytimes</styles.Title>
        {bookedTimes.data?.map((each: BookedLaundrytimes) => (
          <EachBooking key={each._id} info={each} />
        ))}
      </styles.Container>
    </styles.BackgroundContainer>
  );
};

export default MyBookings;

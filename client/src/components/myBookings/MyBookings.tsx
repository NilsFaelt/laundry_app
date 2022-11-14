import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BookedLaundrytimes, LaundryTimes } from "../../types/laundryTypes";
import { UserTypeWithNestedAdress } from "../../types/userType";
import EachBooking from "./eachBooking/EachBooking";
import { useGetTimeByUser } from "./hook/useGetTimeByUser";
import * as styles from "./myBookings.style";

const MyBookings = () => {
  const [rerenderBookings, setRerenderBookings] = useState<boolean>(false);
  const user: UserTypeWithNestedAdress | null = useSelector(
    (state: any) => state.userReducer
  );
  let bookedTimes: any = null;
  if (user?.email)
    bookedTimes = useGetTimeByUser(user?.email, rerenderBookings);

  useEffect(() => {}, [rerenderBookings]);
  console.log(bookedTimes.data, "booked");
  return (
    <styles.BackgroundContainer>
      <styles.Container>
        <styles.Title>Myb booked laundrytimes</styles.Title>
        {bookedTimes.data?.map((each: BookedLaundrytimes) => (
          <EachBooking
            key={each._id}
            info={each}
            setRerenderBookings={setRerenderBookings}
            rerenderBookings={rerenderBookings}
          />
        ))}
      </styles.Container>
    </styles.BackgroundContainer>
  );
};

export default MyBookings;

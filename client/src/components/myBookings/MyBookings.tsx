import { useState } from "react";
import { useSelector } from "react-redux";

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

  //Creatig func

  const deleteOutdAtedBookings = () => {
    const oldDate = new Date().getTime() - 86400000;
    console.log(new Date(oldDate));
  };
  deleteOutdAtedBookings();
  //

  const [bookedTime, setBookedTimes] = useState<LaundryTimes[]>([]);
  let bookedTimes: any = null;
  if (user?.email)
    bookedTimes = useGetTimeByUser(user?.email, rerenderBookings);

  console.log(bookedTimes);

  return (
    <styles.BackgroundContainer>
      <styles.Container>
        <styles.Title>
          My booked laundrytimes {bookedTimes.data?.length}/3
        </styles.Title>
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

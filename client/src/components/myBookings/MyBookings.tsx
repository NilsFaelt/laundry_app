import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { deleteBookTimeById } from "../../api/deleteBookTimeById";
import { BookedLaundrytimes, LaundryTimes } from "../../types/laundryTypes";
import { UserTypeWithNestedAdress } from "../../types/userType";
import EachBooking from "./eachBooking/EachBooking";
import { useGetTimeByUser } from "./hook/useGetTimeByUser";
import * as styles from "./myBookings.style";

interface Data {
  data: BookedLaundrytimes[] | null;
  loading: boolean;
  error: any;
}

const MyBookings = () => {
  const [rerenderBookings, setRerenderBookings] = useState<boolean>(false);
  const user: UserTypeWithNestedAdress | null = useSelector(
    (state: any) => state.userReducer
  );

  const [bookedTime, setBookedTimes] = useState<LaundryTimes[]>([]);
  let bookedTimes: Data | null = null;
  if (user?.email)
    bookedTimes = useGetTimeByUser(user?.email, rerenderBookings);
  console.log(bookedTimes, "times");

  useEffect(() => {
    const oldDate = new Date().getTime() - 86400000;
    if (bookedTimes) {
      const filteredToDelete = bookedTimes.data?.find(
        (time) => time.dateAsMilisecs < oldDate
      );
      if (filteredToDelete) {
        deleteBookTimeById(filteredToDelete._id);
      }
      console.log(filteredToDelete, "del mufker");
    }
  }, [bookedTimes]);

  console.log(bookedTimes);

  return (
    <styles.BackgroundContainer>
      <styles.Container>
        <styles.Title>
          My booked laundrytimes {bookedTimes?.data?.length}/3
        </styles.Title>
        {bookedTimes?.data?.map((each: BookedLaundrytimes) => (
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

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addAllLaundryTimes,
  addLaundryTime,
} from "../../redux/bookedTimesSlice";
import { RootState } from "../../redux/store";
import { BookedLaundrytimes } from "../../types/laundryTypes";
import { UserTypeWithNestedAdress } from "../../types/userType";
import Spinner from "../../ui/loadingSpinner/Spinner";
import EachBooking from "./eachBooking/EachBooking";
import { useGetTimeByUser } from "./hook/useGetTimeByUser";
import * as styles from "./myBookings.style";
import { deleteOutdatedBooking } from "./utils/delteOutdatedBooking";

interface Data {
  data: BookedLaundrytimes[] | null;
  loading: boolean;
  error: any;
}

const MyBookings = () => {
  const dispacth = useDispatch();

  const [rerenderBookings, setRerenderBookings] = useState<boolean>(false);
  const user: UserTypeWithNestedAdress | null = useSelector(
    (state: any) => state.userReducer.user
  );

  let bookedTimes: Data | null = null;
  if (user?.email) {
    bookedTimes = useGetTimeByUser(user?.email, rerenderBookings);
    if (bookedTimes.data) {
      dispacth(addAllLaundryTimes(bookedTimes.data));
    }
  }

  deleteOutdatedBooking(bookedTimes);

  return (
    <styles.BackgroundContainer>
      <styles.Container>
        <styles.Title>
          My booked laundrytimes {bookedTimes?.data?.length || 0}/3
        </styles.Title>
        {bookedTimes?.loading ? <Spinner /> : null}
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

import { useState } from "react";
import { useSelector } from "react-redux";
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
  const [rerenderBookings, setRerenderBookings] = useState<boolean>(false);
  const user: UserTypeWithNestedAdress | null = useSelector(
    (state: any) => state.userReducer
  );

  let bookedTimes: Data | null = null;
  if (user?.email)
    bookedTimes = useGetTimeByUser(user?.email, rerenderBookings);

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

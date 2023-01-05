import { useDispatch } from "react-redux";
import { deleteBookTimeById } from "../../../api/deleteBookTimeById";
import { BookedLaundrytimes } from "../../../types/laundryTypes";
import * as styles from "./eachBooking.styles";
import { fixBookingHoursToMoreReadble } from "./utils/fixBookingHoursToMoreReadble";
import { makeDateReadeable } from "./utils/makeDateReadeble";

interface Props {
  info: BookedLaundrytimes;
  setRerenderBookings: React.Dispatch<React.SetStateAction<boolean>>;
  rerenderBookings: boolean;
}

const EachBooking: React.FC<Props> = ({
  info,
  setRerenderBookings,
  rerenderBookings,
}) => {
  const dispatch = useDispatch();

  const time = fixBookingHoursToMoreReadble(info);
  const deleteOnClick = async (info: BookedLaundrytimes) => {
    deleteBookTimeById(info._id);
    setTimeout(() => {
      setRerenderBookings(!rerenderBookings);
    }, 50);
  };
  const readabelDate = makeDateReadeable(info.dateForBooking);
  return (
    <styles.container>
      <styles.Delete onClick={() => deleteOnClick(info)}></styles.Delete>
      <styles.Title>
        <styles.Span> Time: </styles.Span>
        {time}
      </styles.Title>
      <styles.Title>
        {" "}
        <styles.Span> Date: </styles.Span> {readabelDate}
      </styles.Title>
      <styles.TitleBooked></styles.TitleBooked>
      <styles.Alarm />
    </styles.container>
  );
};

export default EachBooking;

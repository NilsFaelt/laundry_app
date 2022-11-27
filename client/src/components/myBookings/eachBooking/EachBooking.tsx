import { deleteBookTimeById } from "../../../api/deleteBookTimeById";
import { colors } from "../../../styles/colors";
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
  const time = fixBookingHoursToMoreReadble(info);
  const deleteOnClick = async () => {
    deleteBookTimeById(info._id);
    setRerenderBookings(!rerenderBookings);
  };
  const readabelDate = makeDateReadeable(info.dateForBooking);
  return (
    <styles.container>
      <styles.Delete onClick={() => deleteOnClick()}></styles.Delete>
      <styles.Title>Time: {time}</styles.Title>
      <styles.Title>Date: {readabelDate}</styles.Title>
      <styles.TitleBooked></styles.TitleBooked>
    </styles.container>
  );
};

export default EachBooking;

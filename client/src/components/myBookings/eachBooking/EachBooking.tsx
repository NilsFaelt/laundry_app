import { deleteBookTimeById } from "../../../api/deleteBookTimeById";
import { colors } from "../../../styles/colors";
import { BookedLaundrytimes } from "../../../types/laundryTypes";
import * as styles from "./eachBooking.styles";

interface Props {
  info: BookedLaundrytimes;
  setRerenderBookings: React.Dispatch<React.SetStateAction<boolean>>;
  rerenderBookings: boolean;
}
//delete booked time
//Clean upp code
//Fix delay calendar
//fix design my booked times
const EachBooking: React.FC<Props> = ({
  info,
  setRerenderBookings,
  rerenderBookings,
}) => {
  const deleteOnClick = async () => {
    deleteBookTimeById(info._id);
    setRerenderBookings(!rerenderBookings);
  };
  return (
    <styles.container>
      <styles.Delete onClick={() => deleteOnClick()}></styles.Delete>
      <styles.Title>{info?.bookedHours}</styles.Title>
      <styles.Title>{info?.dateForBooking}</styles.Title>
      <styles.TitleBooked></styles.TitleBooked>
    </styles.container>
  );
};

export default EachBooking;

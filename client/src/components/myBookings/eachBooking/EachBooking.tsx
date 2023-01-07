import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteBookTimeById } from "../../../api/deleteBookTimeById";
import { BookedLaundrytimes } from "../../../types/laundryTypes";
import AlarmPopUp from "./alarmPopUp/AlarmPopUp";
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
  const [toogleAlarm, setToolgeAlarm] = useState(false);
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
      {toogleAlarm ? <AlarmPopUp setToolgeAlarm={setToolgeAlarm} /> : null}
      <styles.Delete onClick={() => deleteOnClick(info)}></styles.Delete>
      <styles.TitleTop>
        <styles.Span> LaundryRoom: </styles.Span>
        {info.laundryRoom}
      </styles.TitleTop>
      <styles.Title>
        <styles.Span> Time: </styles.Span>
        {time}
      </styles.Title>
      <styles.Title>
        {" "}
        <styles.Span> Date: </styles.Span> {readabelDate}
      </styles.Title>
      <styles.TitleBooked></styles.TitleBooked>
      <styles.Alarm onClick={() => setToolgeAlarm(true)} />
    </styles.container>
  );
};

export default EachBooking;

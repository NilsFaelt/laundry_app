import * as styles from "./calendar.styles";
import "react-calendar/dist/Calendar.css";
import Calendar from "react-calendar";
import { useState } from "react";

const CalendarComp = () => {
  const [value, onChange] = useState(new Date());
  console.log(value);
  return (
    <styles.Container>
      <styles.CalendarWrapper>
        <Calendar onChange={onChange} value={value} />
      </styles.CalendarWrapper>
    </styles.Container>
  );
};

//Get bookdtimes
//Book new time
//Max 3
//Show my bokked times
//show availble bookings
//Delete old bookings
// no duplicate bookings

export default CalendarComp;

export function Loader() {}

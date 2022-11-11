import * as styles from "./calendar.styles";
import "react-calendar/dist/Calendar.css";
import Calendar from "react-calendar";
import { useEffect, useState } from "react";
import { splitAndConCatDateString } from "./utils/splitAndConCatDateString";
import { getBookedTimesByDate } from "../../api/getBookedTimesByDate";
import { useGetbookTimesByDay } from "../../hooks/useGetbookTimesByDay";
import { laundryTimes } from "./laundryTimes";
import { LaundryTimes } from "../../types/laundryTypes";

const CalendarComp = () => {
  const [bookingTimes, setBookingTimes] =
    useState<LaundryTimes[]>(laundryTimes);
  const [date, setDate] = useState(new Date());
  const dateString = splitAndConCatDateString(date);
  const data = useGetbookTimesByDay(dateString);
  console.log(data);
  console.log(bookingTimes);

  return (
    <styles.Container>
      <styles.CalendarWrapper>
        <Calendar onChange={setDate} value={date} />
        <styles.Title>Availible times today</styles.Title>
        {bookingTimes.map((time) => {
          return <styles.Title>{time.timeAsString}</styles.Title>;
        })}
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

import * as styles from "./calendar.styles";
import "react-calendar/dist/Calendar.css";
import Calendar from "react-calendar";
import { useEffect, useState } from "react";
import { splitAndConCatDateString } from "./utils/splitAndConCatDateString";
import { useGetbookTimesByDay } from "../../hooks/useGetbookTimesByDay";
import { laundryTimes } from "./laundryTimes";
import { LaundryTimes } from "../../types/laundryTypes";
import { loopThruLaundryTimes } from "./utils/loopThruLaundryTimes";
import ShowAvilibleTimes from "./showAvilibleTimes/ShowAvilibleTimes";

const CalendarComp = () => {
  const [bookingTimes, setBookingTimes] = useState<LaundryTimes[] | null>(null);
  const [date, setDate] = useState(new Date());
  const dateString = splitAndConCatDateString(date);
  const data = useGetbookTimesByDay(dateString);

  useEffect(() => {
    if (data.data)
      loopThruLaundryTimes(laundryTimes, data.data, setBookingTimes);
  }, [date]);

  return (
    <styles.Container>
      <styles.CalendarWrapper>
        <Calendar onChange={setDate} value={date} />
        {bookingTimes ? (
          <styles.Title>Availible times today</styles.Title>
        ) : (
          <styles.Title>Choose a date</styles.Title>
        )}
        {bookingTimes?.map((time) => {
          return <ShowAvilibleTimes bookedTime={time} />;
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

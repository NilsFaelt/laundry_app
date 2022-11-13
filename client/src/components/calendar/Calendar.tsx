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
import BookTimePopUp from "./bookTimePopUp/BookTimePopUp";

const CalendarComp = () => {
  const [choosenTime, setChoosenTime] = useState<LaundryTimes | null>(null);
  const [toogleBookPopUp, setToogleBookPopUp] = useState(false);
  const [bookingTimes, setBookingTimes] = useState<LaundryTimes[] | null>(null);
  const [date, setDate] = useState(new Date());
  const dateString = splitAndConCatDateString(date);
  const data = useGetbookTimesByDay(dateString);
  console.log(dateString);
  useEffect(() => {
    if (data.data)
      loopThruLaundryTimes(laundryTimes, data.data, setBookingTimes);
  }, [date]);

  const handleBookTimeClick = (time: LaundryTimes) => {
    setChoosenTime(time);
    setToogleBookPopUp(true);
  };

  return (
    <styles.Container>
      <styles.CalendarWrapper>
        <Calendar onChange={setDate} value={date} />
        {toogleBookPopUp ? (
          <BookTimePopUp
            bookedTime={choosenTime}
            dateString={dateString}
            setToogleBookPopUp={setToogleBookPopUp}
          />
        ) : null}
        {bookingTimes ? (
          <styles.Title>Availible times today</styles.Title>
        ) : (
          <styles.Title>Choose a date</styles.Title>
        )}
        {bookingTimes?.map((time) => {
          return (
            <ShowAvilibleTimes
              key={time.time}
              bookedTime={time}
              handleBookTimeClick={handleBookTimeClick}
            />
          );
        })}
      </styles.CalendarWrapper>
    </styles.Container>
  );
};

//Book new time
//Max 3
//Show my bokked times
//Delete old bookings
// no duplicate bookings

export default CalendarComp;

import * as styles from "./calendar.styles";
import "react-calendar/dist/Calendar.css";
import Calendar from "react-calendar";
import { useEffect, useState } from "react";
import { splitAndConCatDateString } from "./utils/splitAndConCatDateString";
import { laundryTimes } from "./laundryTimes";
import { LaundryTimes } from "../../types/laundryTypes";
import { loopThruLaundryTimes } from "./utils/loopThruLaundryTimes";
import ShowAvilibleTimes from "./showAvilibleTimes/ShowAvilibleTimes";
import BookTimePopUp from "./bookTimePopUp/BookTimePopUp";
import { shortenDateToString } from "../../utils/shortenDateToString";

const CalendarComp = () => {
  const [choosenTime, setChoosenTime] = useState<LaundryTimes | null>(null);
  const [toogleBookPopUp, setToogleBookPopUp] = useState(false);
  const [bookingTimes, setBookingTimes] = useState<LaundryTimes[] | null>(null);
  const [date, setDate] = useState(new Date());
  const dateString = splitAndConCatDateString(date);
  const readebleDate = shortenDateToString(date);

  useEffect(() => {
    loopThruLaundryTimes(laundryTimes, setBookingTimes, dateString);
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
            date={date}
            dateString={dateString}
            bookedTime={choosenTime}
            readebleDate={readebleDate}
            setToogleBookPopUp={setToogleBookPopUp}
          />
        ) : null}
        {bookingTimes ? (
          <>
            <styles.Title>Availible times today</styles.Title>
            <styles.Title>
              {readebleDate.day}-{readebleDate.month}-{readebleDate.year}
            </styles.Title>
          </>
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

export default CalendarComp;

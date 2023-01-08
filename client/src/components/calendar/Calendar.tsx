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
import Spinner from "../../ui/loadingSpinner/Spinner";
import Head from "../Helmet/Head";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const CalendarComp = () => {
  const [choosenRoom, setChoosenRoom] = useState("");
  const [toogleMenu, setToogleMenu] = useState(false);
  const [choosenTime, setChoosenTime] = useState<LaundryTimes | null>(null);
  const [toogleBookPopUp, setToogleBookPopUp] = useState(false);
  const [bookingTimes, setBookingTimes] = useState<LaundryTimes[] | null>(null);
  const [date, setDate] = useState(new Date());
  const dateString = splitAndConCatDateString(date);
  const readebleDate = shortenDateToString(date);

  const laundryRooms = useSelector(
    (state: RootState) => state.laundryRoomReducer.laundryRooms
  );

  useEffect(() => {
    loopThruLaundryTimes(
      laundryTimes,
      setBookingTimes,
      dateString,
      choosenRoom
    );
  }, [date, choosenRoom]);

  useEffect(() => {
    if (laundryRooms.length > 0) setChoosenRoom(laundryRooms[0]?.laundryRoom);
    else {
      setChoosenRoom("Main");
    }
  }, [laundryRooms]);

  const handleBookTimeClick = (time: LaundryTimes) => {
    setChoosenTime(time);
    setToogleBookPopUp(true);
  };

  const chooseLaundryRoomOnClick = (room: string) => {
    setChoosenRoom(room);
    setToogleMenu(false);
  };
  return (
    <styles.Container>
      <Head title='calendar' description='booking calendar' />
      <styles.CalendarWrapper>
        <styles.Title>
          <span>LaundryRoom:</span>{" "}
          {laundryRooms?.length < 1 ? "Main" : choosenRoom}
        </styles.Title>
        {laundryRooms?.length < 1 ? null : (
          <styles.ChooseTitle onClick={() => setToogleMenu(!toogleMenu)}>
            Change Laundry room?
          </styles.ChooseTitle>
        )}

        {toogleMenu ? (
          <styles.UserMenu>
            {laundryRooms.map((room) => {
              return (
                <styles.PostsLink
                  onClick={() => chooseLaundryRoomOnClick(room.laundryRoom)}
                  key={room._id}
                >
                  {room.laundryRoom}
                </styles.PostsLink>
              );
            })}
          </styles.UserMenu>
        ) : null}

        <Calendar onChange={setDate} value={date} />
        {toogleBookPopUp ? (
          <BookTimePopUp
            choosenRoom={choosenRoom}
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
        {bookingTimes ? null : <Spinner />}
        {bookingTimes?.map((time) => {
          return (
            <ShowAvilibleTimes
              date={date}
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

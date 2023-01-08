import { getBookedTimesByDate } from "../../../api/getBookedTimesByDate";
import { BookedLaundrytimes, LaundryTimes } from "../../../types/laundryTypes";

export const loopThruLaundryTimes = async (
  laundryTimes: LaundryTimes[],
  setBookingTimes: React.Dispatch<React.SetStateAction<LaundryTimes[] | null>>,
  dateString: string,
  choosenRoom: string
) => {
  const data = await getBookedTimesByDate(dateString);

  setBookingTimes(laundryTimes);
  for (let i = 0; i < laundryTimes.length; i++) {
    data.map((booked: BookedLaundrytimes) => {
      console.log(booked.laundryRoom, "dayta in func");
      console.log(choosenRoom, "choosen");
      if (
        booked.bookedHours === laundryTimes[i].time &&
        booked.laundryRoom === choosenRoom
      ) {
        setBookingTimes((prev) =>
          prev!.map((each) => {
            if (each.time === laundryTimes[i].time) {
              return { ...each, availible: false };
            } else return each;
          })
        );
      }
    });
  }
};

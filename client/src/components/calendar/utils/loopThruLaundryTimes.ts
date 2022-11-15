import { getBookedTimesByDate } from "../../../api/getBookedTimesByDate";
import { BookedLaundrytimes, LaundryTimes } from "../../../types/laundryTypes";

export const loopThruLaundryTimes = async (
  laundryTimes: LaundryTimes[],
  setBookingTimes: React.Dispatch<React.SetStateAction<LaundryTimes[] | null>>,
  dateString: string
) => {
  const data = await getBookedTimesByDate(dateString);
  console.log(data, "in func");
  console.log(laundryTimes);
  setBookingTimes(laundryTimes);
  for (let i = 0; i < laundryTimes.length; i++) {
    data.map((booked: BookedLaundrytimes) => {
      if (booked.bookedHours === laundryTimes[i].time) {
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

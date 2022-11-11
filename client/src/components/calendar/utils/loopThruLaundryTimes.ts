import { BookedLaundrytimes, LaundryTimes } from "../../../types/laundryTypes";

export const loopThruLaundryTimes = (
  laundryTimes: LaundryTimes[],
  bookeLaundryTimes: BookedLaundrytimes[],
  setBookingTimes: React.Dispatch<React.SetStateAction<LaundryTimes[] | null>>
) => {
  setBookingTimes(laundryTimes);
  for (let i = 0; i < laundryTimes.length; i++) {
    bookeLaundryTimes.map((booked) => {
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

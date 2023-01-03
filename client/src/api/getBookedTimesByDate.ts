import axios from "axios";
import { BookedLaundrytimes } from "../types/laundryTypes";
import { apiConfig } from "./apiConifig";

export const getBookedTimesByDate = async (
  date: string
): Promise<BookedLaundrytimes[]> => {
  try {
    const bookedTimes = await axios.post(
      `http://${apiConfig.url}:${apiConfig.port}/booked/byDay`,
      { dateForBooking: date }
    );

    return bookedTimes.data.bookings;
  } catch (err: any) {
    throw { msg: err, stack: err.stack };
  }
};

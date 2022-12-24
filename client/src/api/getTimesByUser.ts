import axios from "axios";
import { BookedLaundrytimes, LaundryTimes } from "../types/laundryTypes";
import { apiConfig } from "./apiConifig";

export const getBookedTimesByUser = async (
  userEmail: string
): Promise<BookedLaundrytimes[] | null> => {
  try {
    const bookedTimes = await axios.post(
      `http://${apiConfig.url}:${apiConfig.port}/booked/byUser`,
      { email: userEmail }
    );
    return bookedTimes.data.bookings;
  } catch (err: any) {
    throw { msg: err, stack: err.stack };
  }
};

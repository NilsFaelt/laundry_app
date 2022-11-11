import axios from "axios";
import { apiConfig } from "./apiConifig";

export const getBookedTimesByDate = async (date: string) => {
  try {
    const bookedTimes = await axios.post(
      `http://${apiConfig.url}:${apiConfig.port}/booked/byDay`,
      { dateForBooking: date }
    );
    return bookedTimes.data.bookings;
  } catch (err) {
    throw { message: "Couldnt get booked times", status: 500 };
  }
};

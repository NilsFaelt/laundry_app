import axios from "axios";
import { apiConfig } from "./apiConifig";

export const getBookedTimesByUser = async (userEmail: string) => {
  try {
    const bookedTimes = await axios.post(
      `http://${apiConfig.url}:${apiConfig.port}/booked/byUser`,
      { email: userEmail }
    );
    return bookedTimes.data.bookings;
  } catch (err) {
    throw { message: "Couldnt get booked times", status: 500 };
  }
};

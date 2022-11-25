import axios from "axios";
import { LaundryTimes } from "../types/laundryTypes";
import { apiConfig } from "./apiConifig";

interface BookingInfo {
  laundryRoom: string;
  dateForBooking: string;
  email: string;
  name: string;
  bookedHours: number;
  dateAsMilisecs?: number;
}

export const bookALaundryTime = async (bookingInfo: BookingInfo) => {
  try {
    const bookedTime = await axios.post(
      `http://${apiConfig.url}:${apiConfig.port}/booked`,
      { bookingInfo }
    );
    return bookedTime.data;
  } catch (err) {
    throw { message: "Couldnt book time", status: 500 };
  }
};

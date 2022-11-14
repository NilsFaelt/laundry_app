import axios from "axios";
import { apiConfig } from "./apiConifig";

export const deleteBookTimeById = async (id: string) => {
  try {
    const bookedTime = await axios.delete(
      `http://${apiConfig.url}:${apiConfig.port}/booked/byId/${id}`
    );

    return bookedTime;
  } catch (err) {
    console.log(err);
  }
};

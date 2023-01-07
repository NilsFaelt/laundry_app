import axios from "axios";
import { LaundryRoom } from "../types/laundryRoom";
import { apiConfig } from "./apiConifig";

export const addRoom = async (room: string): Promise<LaundryRoom> => {
  try {
    const data = await axios.post(
      `http://${apiConfig.url}:${apiConfig.port}/laundryroom`,
      {
        laundryRoom: room,
      }
    );
    return data.data.laundryRoom;
  } catch (err: any) {
    throw { msg: err, stack: err.stack };
  }
};

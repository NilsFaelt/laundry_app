import axios from "axios";
import { LaundryRoom } from "../types/laundryRoom";
import { apiConfig } from "./apiConifig";

export const addRoom = async (room: string): Promise<LaundryRoom[]> => {
  try {
    const data = axios.post(
      `http://${apiConfig.url}:${apiConfig.port}/laundryroom`,
      {
        laundryRoom: room,
      }
    );
    return (await data).data.rooms;
  } catch (err: any) {
    throw { msg: err, stack: err.stack };
  }
};

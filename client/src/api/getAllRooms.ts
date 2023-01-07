import axios from "axios";
import { LaundryRoom } from "../types/laundryRoom";
import { apiConfig } from "./apiConifig";

export const getAllRooms = async (): Promise<LaundryRoom[]> => {
  try {
    const data = await axios(
      `http://${apiConfig.url}:${apiConfig.port}/laundryroom`
    );
    return data.data.rooms;
  } catch (err: any) {
    throw { msg: err, stack: err.stack };
  }
};

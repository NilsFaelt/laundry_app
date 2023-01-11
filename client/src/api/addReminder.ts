import axios from "axios";
import { Ireminder } from "../types/reminderTypes";
import { apiConfig } from "./apiConifig";

export const addReminder = async (info: Ireminder): Promise<Ireminder> => {
  try {
    const data = await axios.post(
      `http://${apiConfig.url}:${apiConfig.port}/reminder`,
      info
    );
    return data.data.reminder;
  } catch (err: any) {
    throw { msg: err.msg, stack: err.stack };
  }
};

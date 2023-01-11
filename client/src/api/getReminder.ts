import axios from "axios";
import { Ireminder } from "../types/reminderTypes";
import { apiConfig } from "./apiConifig";

export const getReminder = async (): Promise<Ireminder> => {
  try {
    const data = await axios(
      `http://${apiConfig.url}:${apiConfig.port}/reminder`
    );
    return data.data.reminder[0];
  } catch (err: any) {
    throw { msg: err.msg, stack: err.stack };
  }
};

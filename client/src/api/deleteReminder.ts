import axios from "axios";
import { apiConfig } from "./apiConifig";

export const deleteReminder = async () => {
  try {
    const data = await axios.delete(
      `http://${apiConfig.url}:${apiConfig.port}/reminder`
    );
    return data;
  } catch (err: any) {
    throw { msg: err.msg, stack: err.stack };
  }
};

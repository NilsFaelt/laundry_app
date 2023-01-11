import axios from "axios";
import { apiConfig } from "./apiConifig";

export const getReminder = async () => {
  try {
    const data = await axios(
      `http://${apiConfig.url}:${apiConfig.port}/reminder`
    );
    return data;
  } catch (err: any) {
    throw { msg: err.msg, stack: err.stack };
  }
};

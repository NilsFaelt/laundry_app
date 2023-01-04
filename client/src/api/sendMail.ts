import axios from "axios";
import { MailType } from "../types/mailTypes";
import { apiConfig } from "./apiConifig";

export const sendMail = async (mailInfo: MailType) => {
  try {
    const data = await axios.post(
      `http://${apiConfig.url}:${apiConfig.port}/mail`,
      mailInfo
    );
  } catch (err: any) {
    throw { error: err, stack: err.stack };
  }
};

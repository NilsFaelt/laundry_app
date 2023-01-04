import axios from "axios";
import { MailType } from "../types/mailTypes";
import { apiConfig } from "./apiConifig";

export const updatedMail = async (id: string) => {
  try {
    const data = await axios.put(
      `http://${apiConfig.url}:${apiConfig.port}/mail/${id}`,
      { read: true }
    );
  } catch (err: any) {
    throw { error: err, stack: err.stack };
  }
};

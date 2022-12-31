import axios from "axios";
import { apiConfig } from "./apiConifig";

export const deleteThread = async (thread: string) => {
  console.log(thread);
  try {
    const data = await axios.delete(
      `http://${apiConfig.url}:${apiConfig.port}/thread/deleteThread/${thread}`
    );
    return data;
  } catch (err: any) {
    throw { msg: err, stack: err.stack };
  }
};

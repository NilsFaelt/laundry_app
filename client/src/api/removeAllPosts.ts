import axios from "axios";
import { apiConfig } from "./apiConifig";

export const deleteAllPosts = async (threadName: string) => {
  try {
    const data = await axios.delete(
      `http://${apiConfig.url}:${apiConfig.port}/posts/deleteAllPostsByThread/${threadName}`
    );
    return data;
  } catch (err: any) {
    throw { msg: err, stack: err.stack };
  }
};

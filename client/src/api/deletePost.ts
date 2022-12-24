import axios from "axios";
import { apiConfig } from "./apiConifig";

export const deletePost = async (id: string) => {
  try {
    const data = await axios.delete(
      `http://${apiConfig.url}:${apiConfig.port}/posts/deletePost/${id}`
    );
    return data;
  } catch (err: any) {
    throw { msg: err, stack: err.stack };
  }
};

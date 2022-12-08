import axios from "axios";
import { ThreadType } from "../types/threadTypes";
import { apiConfig } from "./apiConifig";

export const addThread = async (threadInfo: ThreadType): Promise<void> => {
  try {
    const postedThread = await axios.post(
      `http://${apiConfig.url}:${apiConfig.port}/thread/addNew`,
      threadInfo
    );
  } catch (err) {
    console.log(err);
  }
};

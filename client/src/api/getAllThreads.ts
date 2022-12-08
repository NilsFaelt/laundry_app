import axios from "axios";
import { createDispatchHook } from "react-redux";
import { ThreadType } from "../types/threadTypes";
import { apiConfig } from "./apiConifig";

export const getAllThreads = async (): Promise<ThreadType[] | null> => {
  try {
    const data = await axios(
      `http://${apiConfig.url}:${apiConfig.port}/thread`
    );
    return data.data.threads;
  } catch (err) {
    console.log(err);
  }
  return null;
};

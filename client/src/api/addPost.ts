import axios from "axios";
import { Post } from "../types/postType";
import { apiConfig } from "./apiConifig";

export const addPost = async (post: Post) => {
  try {
    axios.post(`http://${apiConfig.url}:${apiConfig.port}/posts/addPost`, post);
  } catch (err) {
    throw { msg: err };
  }
};

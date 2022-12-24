import axios from "axios";
import { Post } from "../types/postType";
import { apiConfig } from "./apiConifig";

export const addPost = async (post: Post): Promise<Post> => {
  try {
    const data = await axios.post(
      `http://${apiConfig.url}:${apiConfig.port}/posts/addPost`,
      post
    );
    return data.data.post;
  } catch (err: any) {
    throw { msg: err, stack: err.stack };
  }
};

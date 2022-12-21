import axios from "axios";
import { Post } from "../types/postType";

export const getAllPosts = async (query: string): Promise<Post[]> => {
  try {
    const data = await axios(`http://localhost:8080/posts/${query}`);
    return data.data.posts;
  } catch (err) {
    throw { msg: err };
  }
};

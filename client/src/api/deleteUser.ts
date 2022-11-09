import axios from "axios";
import { apiConfig } from "./apiConifig";

export const deleteUser = async (id: string) => {
  try {
    const user = await axios.delete(
      `http://${apiConfig.url}:${apiConfig.port}/users/${id}`
    );

    return user;
  } catch (err) {
    console.log(err);
  }
};

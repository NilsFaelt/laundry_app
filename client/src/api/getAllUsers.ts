import axios from "axios";
import { apiConfig } from "./apiConifig";

export const getAllUsers = async () => {
  try {
    const allUsers = await axios(
      `http://${apiConfig.url}:${apiConfig.port}/users`
    );
    return allUsers.data;
  } catch (err) {
    throw { message: "Couldnt get users", status: 500 };
  }
};

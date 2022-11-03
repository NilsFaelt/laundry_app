import axios from "axios";
import { UserType } from "../types/userType";
import { apiConfig } from "./apiConifig";

export const getOneUser = async (email: string) => {
  try {
    const user = await axios.post(
      `http://${apiConfig.url}:${apiConfig.port}/users/getOne`,
      { email }
    );
    console.log(user);
    return user;
  } catch (err) {
    console.log(err);
  }
};

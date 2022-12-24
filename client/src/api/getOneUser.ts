import axios from "axios";
import { UserType } from "../types/userType";
import { apiConfig } from "./apiConifig";

export const getOneUser = async (email: string) => {
  console.log(email);
  try {
    const user = await axios.post(
      `http://${apiConfig.url}:${apiConfig.port}/users/getOne`,
      { email }
    );
    return user;
  } catch (err: any) {
    throw { msg: err, stack: err.stack };
  }
};

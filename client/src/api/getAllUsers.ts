import axios from "axios";
import { UserTypeWithNestedAdress } from "../types/userType";
import { apiConfig } from "./apiConifig";

export const getAllUsers = async (): Promise<UserTypeWithNestedAdress[]> => {
  try {
    const allUsers = await axios(
      `http://${apiConfig.url}:${apiConfig.port}/users`
    );
    return allUsers.data;
  } catch (err: any) {
    throw { msg: err, stack: err.stack };
  }
};

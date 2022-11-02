import axios from "axios";
import { UserType } from "../types/userType";
import { apiConfig } from "./apiConifig";

export async function createUser(
  createUserInfo: UserType
): Promise<UserType | null> {
  try {
    const user = await axios.post(
      `http://${apiConfig.url}:${apiConfig.port}/users`,
      createUserInfo
    );
    const returnData = user.data.user;
    console.log(returnData, "user");
    return returnData;
  } catch (err) {
    console.log(err);
  }
  return null;
}

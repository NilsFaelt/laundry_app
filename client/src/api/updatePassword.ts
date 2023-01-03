import axios from "axios";
import { UserType, UserTypeWithNestedAdress } from "../types/userType";
import { apiConfig } from "./apiConifig";

interface ReturnData {
  data: UserTypeWithNestedAdress;
  status: number;
}

interface Credentials {
  password: string;
  confirmPassword?: string;
  newPassword: string;
}

export async function updatePassword(
  id: string,
  credentials: Credentials
): Promise<ReturnData> {
  try {
    const data = await axios.put(
      `http://${apiConfig.url}:${apiConfig.port}/users/updateuserpassword/${id}`,
      credentials
    );

    return data;
  } catch (err: any) {
    throw { msg: err, stack: err.stack };
  }
}

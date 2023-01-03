import axios from "axios";
import { apiConfig } from "./apiConifig";

interface Data {
  info: string;
}
export const deleteUser = async (id: string): Promise<Data> => {
  try {
    const user = await axios.delete(
      `http://${apiConfig.url}:${apiConfig.port}/users/${id}`
    );

    return user.data;
  } catch (err: any) {
    throw { msg: err, stack: err.stack };
  }
};

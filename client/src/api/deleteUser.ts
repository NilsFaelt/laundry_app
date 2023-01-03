import axios from "axios";
import { apiConfig } from "./apiConifig";

interface Data {
  data: { info: string };
  status: number;
}
export const deleteUser = async (id: string): Promise<Data> => {
  try {
    const data = await axios.delete(
      `http://${apiConfig.url}:${apiConfig.port}/users/${id}`
    );

    return data;
  } catch (err: any) {
    throw { msg: err, stack: err.stack };
  }
};

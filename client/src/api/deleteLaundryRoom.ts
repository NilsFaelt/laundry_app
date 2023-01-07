import axios from "axios";
import { apiConfig } from "./apiConifig";

interface Data {
  masg: string;
}

export const deleteLaundryRoom = async (id: string): Promise<Data> => {
  try {
    const data = await axios.delete(
      `http://${apiConfig.url}:${apiConfig.port}/laundryroom/${id}`
    );

    return data.data;
  } catch (err: any) {
    throw { msg: err, stack: err.stack };
  }
};

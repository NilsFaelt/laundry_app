import axios from "axios";
import { apiConfig } from "./apiConifig";

export const login = async (loginInfo: any) => {
  try {
    const user = await axios.post(
      `http://${apiConfig.url}:${apiConfig.port}/auth`,
      loginInfo
    );
    console.log(user);
    return user.data.user;
  } catch (err) {
    console.log(err);
  }
};
axios;

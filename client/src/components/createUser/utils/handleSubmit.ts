import axios from "axios";
import { UserType } from "../../../types/userType";

export const handleSubmit = async (
  e: React.FormEvent<HTMLFormElement>,
  createUserInfo: UserType
) => {
  e.preventDefault();
  try {
    const user = await axios.post(
      "http://localhost:8080/users",
      createUserInfo
    );
    console.log(user);
  } catch (err) {
    console.log(err);
  }
};

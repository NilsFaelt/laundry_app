import axios from "axios";
import { createUser } from "../../../api/createUser";
import { UserType } from "../../../types/userType";

export const handleSubmit = async (
  e: React.FormEvent<HTMLFormElement>,
  createUserInfo: UserType
) => {
  e.preventDefault();
  const data = createUser(createUserInfo);
  return data;
};

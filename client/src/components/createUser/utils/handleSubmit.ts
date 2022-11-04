import axios from "axios";
import { createUser } from "../../../api/createUser";
import { getOneUser } from "../../../api/getOneUser";
import { UserType } from "../../../types/userType";

export const handleSubmit = async (
  e: any,
  createUserInfo: UserType,
  setUserexsists: React.Dispatch<React.SetStateAction<boolean>>,
  setCreatedUser: React.Dispatch<React.SetStateAction<UserType | null>>
) => {
  e.preventDefault();
  const user = await getOneUser(createUserInfo.email);
  if (user) {
    setUserexsists(true);
  } else {
    setUserexsists(false);
    const data = await createUser(createUserInfo);
    setCreatedUser(data);
    e.target.reset();
  }
};

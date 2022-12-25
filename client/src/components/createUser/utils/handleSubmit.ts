import axios from "axios";
import { createUser } from "../../../api/createUser";
import { getOneUser } from "../../../api/getOneUser";
import { UserType } from "../../../types/userType";

export const handleSubmit = async (
  e: any,
  createUserInfo: UserType,
  setUserexsists: React.Dispatch<React.SetStateAction<boolean>>,
  setCreatedUser: React.Dispatch<React.SetStateAction<UserType | null>>,
  admin: boolean,
  setCreateUserInfo: React.Dispatch<
    React.SetStateAction<{
      name: string;
      lastName: string;
      password: string;
      email: string;
      brf: string;
      apartment: null;
      adress: string;
      city: string;
      postal: null;
      bookingNr: null;
      admin: boolean;
    }>
  >
) => {
  e.preventDefault();
  // setCreateUserInfo((prev) => ({ ...prev, admin: admin }));
  const user = await getOneUser(createUserInfo.email);
  console.log(user.data.user, "im func");
  if (user.data.user) {
    setUserexsists(true);
  } else {
    setUserexsists(false);
    const data = await createUser(createUserInfo);
    setCreatedUser(data);
    e.target.reset();
  }
};

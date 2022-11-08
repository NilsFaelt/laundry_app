import { updateUser } from "../../../../api/updateUser";
import { changeUserStructubforebeforeSend } from "./changeUserStructubforebeforeSend";

export const updateUserOnSubmit = async (
  e: React.FormEvent<HTMLFormElement>,
  createUserInfo: CreateUserInfo,
  setUserWereUpdated: React.Dispatch<React.SetStateAction<boolean>>
) => {
  e.preventDefault();
  const newStructure = await changeUserStructubforebeforeSend(createUserInfo);
  const updatedUser = await updateUser(newStructure);
  console.log(updatedUser, "upd useer");
  if (updatedUser?.adress) setUserWereUpdated(true);
};

interface CreateUserInfo {
  id: string | undefined;
  name: string;
  lastName: string;
  email: string;
  brf: string;
  apartment: number | null;
  adress: string;
  city: string;
  postal: number | null;
  bookingNr: number | null;
  admin?: boolean;
}

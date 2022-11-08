import { updateUser } from "../../../../api/updateUser";
import { changeUserStructubforebeforeSend } from "./changeUserStructubforebeforeSend";

export const updateUserOnSubmit = async (
  e: React.FormEvent<HTMLFormElement>,
  createUserInfo: CreateUserInfo,
  admin: boolean
) => {
  const newStructure = await changeUserStructubforebeforeSend(
    createUserInfo,
    admin
  );
  console.log(admin, " infunc");
  updateUser(newStructure);
  e.preventDefault();
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
  admin: boolean;
}

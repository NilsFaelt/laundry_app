import { UserTypeWithNestedAdress } from "../../../types/userType";

export const typeCheckUser = (user: UserTypeWithNestedAdress) => {
  if (
    typeof user._id === "string" &&
    typeof user.email === "string" &&
    typeof user.name === "string" &&
    typeof user.lastName === "string" &&
    typeof user.admin === "boolean"
  )
    return true;
  else return false;
};

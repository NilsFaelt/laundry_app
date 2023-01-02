import { UserTypeWithNestedAdress } from "../types/userType";

export function isUser(user: unknown): user is UserTypeWithNestedAdress {
  if (user !== null && typeof user === "object") return "name" in user;
  return false;
}

import { UserTypeWithNestedAdress } from "../../../types/userType";

export const chooseUserOnClick = (
  user: UserTypeWithNestedAdress,
  setChoosenUser: React.Dispatch<
    React.SetStateAction<UserTypeWithNestedAdress | null>
  >,
  setFilteredUsers: React.Dispatch<
    React.SetStateAction<UserTypeWithNestedAdress[] | null>
  >,
  setInput: React.Dispatch<React.SetStateAction<string>>
) => {
  setChoosenUser(user);
  setFilteredUsers(null);
  setInput("");
};

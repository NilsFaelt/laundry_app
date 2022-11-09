import { UserTypeWithNestedAdress } from "../../../types/userType";

interface UserData {
  data: UserTypeWithNestedAdress[] | null;
  loading?: boolean | undefined;
  error?: any;
}

export const searchUser = (
  userData: UserData,
  input: string,
  setFilteredUsers: React.Dispatch<
    React.SetStateAction<UserTypeWithNestedAdress[] | null>
  >
) => {
  const data = userData?.data?.filter((user) => user.email.includes(input));
  if (data && input !== "") setFilteredUsers(data);
};

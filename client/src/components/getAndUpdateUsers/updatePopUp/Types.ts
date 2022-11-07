import { UserTypeWithNestedAdress } from "../../../types/userType";

export interface UpdateUserProps {
  user: UserTypeWithNestedAdress;
  setChoosenUser: React.Dispatch<
    React.SetStateAction<UserTypeWithNestedAdress | null>
  >;
}

import { useEffect, useState } from "react";
import { useGetAllUsers } from "../../hooks/useGetAllUsers";
import { UserType, UserTypeWithNestedAdress } from "../../types/userType";
import * as styles from "./allUsers.style";
import UpdatePopUp from "./updatePopUp/UpdatePopUp";

const AllUsers = () => {
  const [choosenUser, setChoosenUser] =
    useState<UserTypeWithNestedAdress | null>(null);
  const [input, setInput] = useState("");
  const [filteredUsers, setFilteredUsers] = useState<
    UserTypeWithNestedAdress[] | null
  >(null);
  const userData = useGetAllUsers();
  console.log(choosenUser);

  const searchUser = () => {
    const data = userData?.data?.filter((user) => user.email.includes(input));
    if (data) setFilteredUsers(data);
  };
  console.log(userData, "äuserdata");

  useEffect(() => {
    searchUser();
  }, [input]);
  return (
    <styles.BackgroundContainer>
      {choosenUser ? (
        <UpdatePopUp setChoosenUser={setChoosenUser} user={choosenUser} />
      ) : null}
      <styles.UserContainer>
        <styles.Label>Search User</styles.Label>
        <styles.Input
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setInput(e.target.value)
          }
        ></styles.Input>
        <styles.DisplayUserContainer>
          {filteredUsers?.map((user: UserTypeWithNestedAdress) => {
            return (
              <styles.P onClick={() => setChoosenUser(user)}>
                {user.email}
              </styles.P>
            );
          })}
        </styles.DisplayUserContainer>
      </styles.UserContainer>
    </styles.BackgroundContainer>
  );
};

export default AllUsers;

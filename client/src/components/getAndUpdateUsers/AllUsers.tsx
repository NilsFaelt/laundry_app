import { useEffect, useState } from "react";
import { getAllUsers } from "../../api/getAllUsers";
import { useGetAllUsers } from "../../hooks/useGetAllUsers";
import { GetAllUsers, UserTypeWithNestedAdress } from "../../types/userType";
import * as styles from "./allUsers.style";
import UpdatePopUp from "./updatePopUp/UpdatePopUp";

const AllUsers = () => {
  const [input, setInput] = useState("");
  const [choosenUser, setChoosenUser] =
    useState<UserTypeWithNestedAdress | null>(null);
  const [filteredUsers, setFilteredUsers] = useState<
    UserTypeWithNestedAdress[] | null
  >(null);
  const userData = useGetAllUsers();

  const searchUser = () => {
    const data = userData?.data?.filter((user) => user.email.includes(input));
    if (data) setFilteredUsers(data);
  };
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
              <styles.P key={user._id} onClick={() => setChoosenUser(user)}>
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

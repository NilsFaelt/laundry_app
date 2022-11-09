import { useEffect, useState } from "react";
import { useGetAllUsers } from "../../hooks/useGetAllUsers";
import { UserTypeWithNestedAdress } from "../../types/userType";
import * as styles from "./allUsers.style";
import UpdatePopUp from "./updatePopUp/UpdatePopUp";
import { chooseUserOnClick } from "./utils/chooseUserOnClick";
import { searchUser } from "./utils/searchUser";

const AllUsers = () => {
  const [input, setInput] = useState("");
  const [choosenUser, setChoosenUser] =
    useState<UserTypeWithNestedAdress | null>(null);
  const [filteredUsers, setFilteredUsers] = useState<
    UserTypeWithNestedAdress[] | null
  >(null);
  const userData = useGetAllUsers(input);
  useEffect(() => {
    searchUser(userData, input, setFilteredUsers);
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
          value={input}
        ></styles.Input>
        <styles.DisplayUserContainer>
          {filteredUsers?.map((user: UserTypeWithNestedAdress) => {
            return (
              <styles.P
                key={user._id}
                onClick={() =>
                  chooseUserOnClick(
                    user,
                    setChoosenUser,
                    setFilteredUsers,
                    setInput
                  )
                }
              >
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

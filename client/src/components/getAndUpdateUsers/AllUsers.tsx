import { useEffect, useState } from "react";
import { redirect } from "react-router-dom";

import { useGetAllUsers } from "../../hooks/useGetAllUsers";
import { UserTypeWithNestedAdress } from "../../types/userType";
import Head from "../Helmet/Head";
import * as styles from "./allUsers.style";
import UpdatePopUp from "./updatePopUp/UpdatePopUp";
import { chooseUserOnClick } from "./utils/chooseUserOnClick";
import { searchUser } from "./utils/searchUser";

const AllUsers = () => {
  const [users, setUsers] = useState<any>(null);
  const [input, setInput] = useState("");
  const [choosenUser, setChoosenUser] =
    useState<UserTypeWithNestedAdress | null>(null);
  const [filteredUsers, setFilteredUsers] = useState<
    UserTypeWithNestedAdress[] | null
  >(null);

  const userData = useGetAllUsers(input);

  useEffect(() => {
    setUsers(userData);
    searchUser(userData, input, setFilteredUsers);
  }, [input]);

  const refresh = () => {
    setInput("");
    setFilteredUsers(null);
  };

  return (
    <styles.BackgroundContainer>
      <Head title='Search/update users' />
      {choosenUser ? (
        <UpdatePopUp setChoosenUser={setChoosenUser} user={choosenUser} />
      ) : null}
      <styles.UserContainer>
        {/* <styles.Refresh onClick={refresh}></styles.Refresh> */}
        <styles.Label>Search User</styles.Label>
        {userData.error?.message && !userData.data ? (
          <styles.Error>{userData.error?.message}</styles.Error>
        ) : null}
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

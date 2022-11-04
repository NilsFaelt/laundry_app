import { useEffect, useState } from "react";
import { useGetAllUsers } from "../../hooks/useGetAllUsers";
import { UserType } from "../../types/userType";
import * as styles from "./allUsers.style";
import UpdatePopUp from "./updatePopUp/UpdatePopUp";

const AllUsers = () => {
  const [choosenUser, setChoosenUser] = useState<UserType | null>(null);
  const [input, setInput] = useState("");
  const [filteredUsers, setFilteredUsers] = useState<UserType[] | null>(null);
  const userData = useGetAllUsers();
  console.log(choosenUser);

  const searchUser = () => {
    const data = userData?.data?.users?.filter((user: UserType) =>
      user.email.includes(input)
    );
    setFilteredUsers(data);
    console.log(data);
  };

  useEffect(() => {
    searchUser();
  }, [input]);
  return (
    <styles.BackgroundContainer>
      {choosenUser ? <UpdatePopUp user={choosenUser} /> : null}
      <styles.UserContainer>
        <styles.Label>Search User</styles.Label>
        <styles.Input
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setInput(e.target.value)
          }
        ></styles.Input>
        <styles.DisplayUserContainer>
          {filteredUsers?.map((user: UserType) => {
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

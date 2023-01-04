import { useEffect, useState } from "react";
import { UserType } from "../../types/userType";
import Head from "../Helmet/Head";
import * as styles from "./createUser.style";
import PopUpCreatedUser from "./popUp/PopUpCreatedUser";
import { handleSubmit } from "./utils/handleSubmit";

export const CreateUser = () => {
  const [userExsists, setUserexsists] = useState(false);
  const [createdUser, setCreatedUser] = useState<UserType | null>(null);
  const [admin, setAdmin] = useState(false);
  const [createUserInfo, setCreateUserInfo] = useState({
    name: "",
    lastName: "",
    password: "",
    email: "",
    brf: "",
    apartment: null,
    adress: "",
    city: "",
    postal: null,
    bookingNr: null,
    admin: admin,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCreateUserInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  useEffect(() => {
    setCreateUserInfo((prev) => ({ ...prev, admin: admin }));
  }, [admin]);

  return (
    <styles.Container onClick={() => setCreatedUser(null)}>
      <Head title='Create User' />
      {createdUser ? (
        <PopUpCreatedUser
          user={createdUser}
          setCreatedUser={setCreatedUser}
          text={"Created"}
        />
      ) : null}

      <styles.Title>Create User</styles.Title>
      {userExsists ? <styles.P>User already exsists</styles.P> : null}
      <styles.Form
        onSubmit={(e: React.FormEvent<HTMLFormElement>) =>
          handleSubmit(
            e,
            createUserInfo,
            setUserexsists,
            setCreatedUser,
            admin,
            setCreateUserInfo
          )
        }
      >
        <styles.Label>Name:</styles.Label>
        <styles.Input
          required={true}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)}
          name='name'
          placeholder='Name'
        ></styles.Input>
        <styles.Label>Lastname:</styles.Label>
        <styles.Input
          required={true}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)}
          name='lastName'
          placeholder='LastName'
        ></styles.Input>
        <styles.Label>Password:</styles.Label>
        <styles.Input
          required={true}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)}
          name='password'
          placeholder='Password'
        ></styles.Input>
        <styles.Label>Email:</styles.Label>
        <styles.Input
          required={true}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)}
          name='email'
          type='email'
          placeholder='Email'
        ></styles.Input>
        <styles.Label>Brf:</styles.Label>
        <styles.Input
          required={true}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)}
          name='brf'
          placeholder='Brf'
        ></styles.Input>
        <styles.Label>Apartment:</styles.Label>
        <styles.Input
          required={true}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)}
          name='apartment'
          placeholder='Apartment'
          type={"number"}
        ></styles.Input>
        <styles.Label>Adress:</styles.Label>
        <styles.Input
          required={true}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)}
          name='adress'
          placeholder='Adress'
        ></styles.Input>
        <styles.Input
          required={true}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)}
          name='city'
          placeholder='City'
        ></styles.Input>
        <styles.Input
          required={true}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)}
          name='postal'
          placeholder='Postal'
          type={"number"}
        ></styles.Input>
        <styles.Label>Bookingnr:</styles.Label>
        <styles.Input
          required={true}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)}
          name='bookingNr'
          placeholder='BookingNr'
          type={"number"}
        ></styles.Input>
        {admin ? (
          <styles.PNeutral>Admin</styles.PNeutral>
        ) : (
          <styles.P>Not Admin</styles.P>
        )}
        <styles.BtnDiv>
          <styles.PstvBtn type='button' onClick={() => setAdmin(true)}>
            Admin
          </styles.PstvBtn>
          <styles.DangerBtn type='button' onClick={() => setAdmin(false)}>
            Not Admin
          </styles.DangerBtn>
        </styles.BtnDiv>
        <styles.Btn type='submit'>Create</styles.Btn>
      </styles.Form>
    </styles.Container>
  );
};

export default CreateUser;

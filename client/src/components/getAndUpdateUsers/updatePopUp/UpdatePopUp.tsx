import { useEffect, useState } from "react";
import * as styles from "./updatePopUp.style";
import { UpdateUserProps } from "./Types";
import { updateUserOnSubmit } from "./utils/updateUserOnSubmit";
import { deleteUser } from "../../../api/deleteUser";

const UpdatePopUp: React.FC<UpdateUserProps> = ({ user, setChoosenUser }) => {
  const [showDeleteBtns, setshowDeleteBtns] = useState(false);
  const [userWereUpdated, setUserWereUpdated] = useState(false);
  const [userExsists, setUserexsists] = useState(false);
  const [admin, setAdmin] = useState(user.admin);
  const [createUserInfo, setCreateUserInfo] = useState({
    id: user._id,
    name: user.name,
    lastName: user.lastName,
    email: user.email,
    brf: user.brf,
    apartment: user.apartment,
    adress: user.adress.adress,
    city: user.adress.city,
    postal: user.adress.postal,
    bookingNr: user.bookingNr,
    admin: user.admin,
  });

  useEffect(() => {
    setCreateUserInfo((prev) => ({ ...prev, admin: admin }));
  }, [admin]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCreateUserInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const deleteUserOnClick = async () => {
    if (user._id) {
      const response = await deleteUser(user._id);
      console.log(response?.status);
      if (response?.status === 200) {
        setChoosenUser(null);
      }
    }
  };

  return (
    <styles.Container>
      <styles.Close onClick={() => setChoosenUser(null)}></styles.Close>
      <styles.Title>Update User</styles.Title>
      <styles.Pdel onClick={() => setshowDeleteBtns(true)}>
        Delete User ?
      </styles.Pdel>
      {showDeleteBtns ? (
        <>
          <styles.BtnDiv>
            <styles.PstvBtn onClick={() => setshowDeleteBtns(false)}>
              No
            </styles.PstvBtn>
            <styles.DangerBtn onClick={() => deleteUserOnClick()}>
              Yes
            </styles.DangerBtn>
          </styles.BtnDiv>
        </>
      ) : null}
      {userExsists ? <styles.P>User already exsists</styles.P> : null}
      <styles.Form
        onSubmit={(e: React.FormEvent<HTMLFormElement>) =>
          updateUserOnSubmit(e, createUserInfo, setUserWereUpdated)
        }
      >
        <styles.Lable>Name</styles.Lable>
        <styles.Input
          required={true}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)}
          name='name'
          placeholder='Name'
          value={createUserInfo.name}
        ></styles.Input>
        <styles.Lable>Lastname</styles.Lable>
        <styles.Input
          required={true}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)}
          name='lastName'
          placeholder='LastName'
          value={createUserInfo.lastName}
        ></styles.Input>
        <styles.Lable>Email</styles.Lable>
        <styles.Input
          required={true}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)}
          name='email'
          placeholder='Email'
          type='email'
          value={createUserInfo.email}
        ></styles.Input>
        <styles.Lable>Brf</styles.Lable>
        <styles.Input
          required={true}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)}
          name='brf'
          placeholder='Brf'
          value={createUserInfo.brf}
        ></styles.Input>
        <styles.Lable>Apartment</styles.Lable>
        <styles.Input
          required={true}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)}
          name='apartment'
          placeholder='Apartment'
          type={"number"}
          value={createUserInfo.apartment!}
        ></styles.Input>
        <styles.Lable>Adress</styles.Lable>
        <styles.Input
          required={true}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)}
          name='adress'
          placeholder='Adress'
          value={createUserInfo.adress}
        ></styles.Input>
        <styles.Lable>City</styles.Lable>
        <styles.Input
          required={true}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)}
          name='city'
          placeholder='City'
          value={createUserInfo.city}
        ></styles.Input>
        <styles.Lable>Postal</styles.Lable>
        <styles.Input
          required={true}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)}
          name='postal'
          placeholder='Postal'
          type={"number"}
          value={createUserInfo.postal!}
        ></styles.Input>
        <styles.Lable>Bookingnr</styles.Lable>
        <styles.Input
          required={true}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)}
          name='bookingNr'
          placeholder='BookingNr'
          type={"number"}
          value={createUserInfo.bookingNr!}
        ></styles.Input>
        {admin ? <styles.PGreen>{user.name} is admin</styles.PGreen> : null}
        <styles.BtnDiv>
          <styles.PstvBtn type='button' onClick={() => setAdmin(true)}>
            Admin
          </styles.PstvBtn>
          <styles.DangerBtn type='button' onClick={() => setAdmin(false)}>
            Not Admin
          </styles.DangerBtn>
        </styles.BtnDiv>
        {userWereUpdated ? (
          <styles.UpdateTitle>User were updated</styles.UpdateTitle>
        ) : null}
        <styles.Btn type='submit'>Update</styles.Btn>
      </styles.Form>
    </styles.Container>
  );
};

export default UpdatePopUp;

import { useState } from "react";
import { validateAdmin } from "../../createUser/utils/validateAdmin";
import * as styles from "./updatePopUp.style";

interface Props {
  user: any;
}

const UpdatePopUp: React.FC<Props> = ({ user }) => {
  const [userExsists, setUserexsists] = useState(false);
  const [dropDownValue, setDropDownValue] = useState("false");
  const [admin, setAdmin] = useState(false);

  const [createUserInfo, setCreateUserInfo] = useState({
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
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCreateUserInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleDropDown = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDropDownValue(e.target.value);
    const validatedAdminString = validateAdmin(dropDownValue);
    setAdmin(validatedAdminString);
  };
  console.log(createUserInfo);
  return (
    <styles.Container>
      <styles.Title>Update User</styles.Title>
      {userExsists ? <styles.P>User already exsists</styles.P> : null}
      <styles.Form>
        <styles.Input
          required={true}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)}
          name='name'
          placeholder='Name'
          value={createUserInfo.name}
        ></styles.Input>
        <styles.Input
          required={true}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)}
          name='lastName'
          placeholder='LastName'
          value={createUserInfo.lastName}
        ></styles.Input>
        <styles.Input
          required={true}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)}
          name='email'
          placeholder='Email'
          value={createUserInfo.email}
        ></styles.Input>
        <styles.Input
          required={true}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)}
          name='brf'
          placeholder='Brf'
          value={createUserInfo.brf}
        ></styles.Input>
        <styles.Input
          required={true}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)}
          name='apartment'
          placeholder='Apartment'
          type={"number"}
          value={createUserInfo.apartment}
        ></styles.Input>
        <styles.Input
          required={true}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)}
          name='adress'
          placeholder='Adress'
          value={createUserInfo.adress}
        ></styles.Input>
        <styles.Input
          required={true}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)}
          name='city'
          placeholder='City'
          value={createUserInfo.city}
        ></styles.Input>
        <styles.Input
          required={true}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)}
          name='postal'
          placeholder='Postal'
          type={"number"}
          value={createUserInfo.postal}
        ></styles.Input>
        <styles.Input
          required={true}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)}
          name='bookingNr'
          placeholder='BookingNr'
          type={"number"}
          value={createUserInfo.bookingNr}
        ></styles.Input>
        <styles.Select
          required={true}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            handleDropDown(e)
          }
        >
          <styles.Option value={"false"}>User</styles.Option>
          <styles.Option value={"true"}>Admin</styles.Option>
        </styles.Select>
        <styles.Btn>Create</styles.Btn>
      </styles.Form>
    </styles.Container>
  );
};

export default UpdatePopUp;

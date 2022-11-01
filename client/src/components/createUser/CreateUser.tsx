import axios from "axios";
import { useState } from "react";
import * as styles from "./createUser.style";
import { handleSubmit } from "./utils/handleSubmit";
import { validateAdmin } from "./utils/validateAdmin";

export const CreateUser = () => {
  const [dropDownValue, setDropDownValue] = useState("false");
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

  const handleDropDown = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDropDownValue(e.target.value);
    const validatedAdminString = validateAdmin(dropDownValue);
    setAdmin(validatedAdminString);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCreateUserInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <styles.Container>
      <styles.Title>Create User</styles.Title>
      <styles.Form
        onSubmit={(e: React.FormEvent<HTMLFormElement>) =>
          handleSubmit(e, createUserInfo)
        }
      >
        <styles.Input
          required={true}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)}
          name='name'
          placeholder='Name'
        ></styles.Input>
        <styles.Input
          required={true}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)}
          name='lastName'
          placeholder='LastName'
        ></styles.Input>
        <styles.Input
          required={true}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)}
          name='password'
          placeholder='Password'
        ></styles.Input>
        <styles.Input
          required={true}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)}
          name='email'
          placeholder='Email'
        ></styles.Input>
        <styles.Input
          required={true}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)}
          name='brf'
          placeholder='Brf'
        ></styles.Input>
        <styles.Input
          required={true}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)}
          name='apartment'
          placeholder='Apartment'
          type={"number"}
        ></styles.Input>
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
        <styles.Input
          required={true}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)}
          name='bookingNr'
          placeholder='BookingNr'
          type={"number"}
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
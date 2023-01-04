import { useState } from "react";
import { useSelector } from "react-redux";
import { preview } from "vite";
import { updatePassword } from "../../api/updatePassword";
import { RootState } from "../../redux/store";
import Head from "../Helmet/Head";
import * as styles from "./myInfo.style";

const MyInfo = () => {
  const [wrongPassword, setWrongPassword] = useState(false);
  const [tooglePassword, setTooglePassword] = useState(false);
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [updateStatus, setUpdateStatus] = useState<null | number>(null);

  const [credentials, setCredentials] = useState({
    password: "",
    confirmPassword: "",
    newPassword: "",
  });

  const user = useSelector((state: RootState) => state.userReducer.user);

  const handleClick = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (credentials.password !== credentials.confirmPassword) {
      setPasswordsMatch(false);
    } else if (
      credentials.password === credentials.confirmPassword &&
      credentials.newPassword
    ) {
      if (typeof user?._id === "string") {
        setUpdateStatus(null);
        setPasswordsMatch(true);
        const data = await updatePassword(
          user?._id,
          credentials,
          setWrongPassword
        );
        if (data) setUpdateStatus(data.status);
        else setUpdateStatus(404);
        setWrongPassword(false);
        setCredentials({ password: "", confirmPassword: "", newPassword: "" });
      }
    }
  };

  console.log(wrongPassword);
  return (
    <styles.BackgroundContainer>
      <Head title='My info' />
      <styles.InfoContainer>
        <styles.Title>Adress</styles.Title>
        <styles.AdressContainer>
          <styles.P>Street: {user?.adress.adress}</styles.P>
          <styles.P>City: {user?.adress.city}</styles.P>
          <styles.P>Postal: {user?.adress.postal}</styles.P>
        </styles.AdressContainer>
        <styles.Title>Info</styles.Title>
        <styles.AdressContainer>
          <styles.P>FirtName: {user?.name}</styles.P>
          <styles.P>LastName: {user?.lastName}</styles.P>
          <styles.P>Email: {user?.email}</styles.P>
        </styles.AdressContainer>
        <styles.Title>Other</styles.Title>
        <styles.AdressContainer>
          <styles.P>BookingNr: {user?.bookingNr}</styles.P>
          <styles.P>Apartment: {user?.apartment}</styles.P>
          <styles.P>Brf: {user?.brf}</styles.P>
        </styles.AdressContainer>
        <styles.ClickableTitle
          onClick={() => setTooglePassword(!tooglePassword)}
        >
          Change Password?
        </styles.ClickableTitle>
        {updateStatus === 200 ? (
          <styles.Title>Password updated</styles.Title>
        ) : null}
        {wrongPassword ? (
          <styles.LabelWarning>
            Make sure passwords are correct
          </styles.LabelWarning>
        ) : null}
        {updateStatus === 404 ? (
          <styles.LabelWarning>Something went wrong</styles.LabelWarning>
        ) : null}
        {tooglePassword ? (
          <styles.Form
            onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleClick(e)}
          >
            <styles.Label>Password:</styles.Label>
            {!passwordsMatch ? (
              <styles.LabelWarning>Password didnt match</styles.LabelWarning>
            ) : null}
            <styles.Input
              required
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setCredentials((prev) => ({
                  ...prev,
                  [e.target.name]: e.target.value,
                }))
              }
              value={credentials.password}
              type='password'
              name='password'
              placeholder='Password'
            />
            <styles.Label>Confirm Password:</styles.Label>{" "}
            {!passwordsMatch ? (
              <styles.LabelWarning>Password didnt match</styles.LabelWarning>
            ) : null}
            <styles.Input
              required
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setCredentials((prev) => ({
                  ...prev,
                  [e.target.name]: e.target.value,
                }))
              }
              value={credentials.confirmPassword}
              type='password'
              name='confirmPassword'
              placeholder='Confirm Password'
            />
            <styles.Label>New Password:</styles.Label>
            <styles.Input
              required
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setCredentials((prev) => ({
                  ...prev,
                  [e.target.name]: e.target.value,
                }))
              }
              value={credentials.newPassword}
              minLength={5}
              type='password'
              name='newPassword'
              placeholder='New Password'
            />
            <styles.Btn>Update</styles.Btn>
          </styles.Form>
        ) : null}
      </styles.InfoContainer>
    </styles.BackgroundContainer>
  );
};

export default MyInfo;

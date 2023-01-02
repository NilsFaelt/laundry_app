import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import * as styles from "./myInfo.style";

const MyInfo = () => {
  const user = useSelector((state: RootState) => state.userReducer.user);
  console.log(user);
  return (
    <styles.BackgroundContainer>
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
        <styles.ClickableTitle>Change Password?</styles.ClickableTitle>
      </styles.InfoContainer>
    </styles.BackgroundContainer>
  );
};

export default MyInfo;

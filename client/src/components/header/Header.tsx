import { useDispatch, useSelector } from "react-redux";
import * as styles from "./header.styles";
import { toogleMenu } from "../../redux/menuSlice";
import DropDownUserMenu from "./dropDownUserMenu/DropDownUserMenu";
import { RootState } from "../../redux/store";
import { useState } from "react";
import MailPopUp from "../mailPopUp/MailPopUp";

const Header = () => {
  const [toogleMailPopUp, setToogleMailPopUp] = useState(false);
  const { userMenu } = useSelector(
    (state: RootState) => state.showActiveMenuReducer
  );
  const dispatch = useDispatch();

  return (
    <styles.Container>
      <styles.Mail onClick={() => setToogleMailPopUp(!toogleMailPopUp)} />
      {!userMenu ? (
        <styles.User onClick={() => dispatch(toogleMenu())}></styles.User>
      ) : (
        <styles.UserDark></styles.UserDark>
      )}
      <DropDownUserMenu />
      {toogleMailPopUp ? (
        <MailPopUp setToogleMailPopUp={setToogleMailPopUp} />
      ) : null}
    </styles.Container>
  );
};

export default Header;

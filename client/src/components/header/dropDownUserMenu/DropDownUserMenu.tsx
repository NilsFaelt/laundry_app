import { useDispatch, useSelector } from "react-redux";
import * as styles from "./dropDownUserMenu.styles";
import { RootState } from "../../../redux/store";
import { useRef } from "react";
import { useClickOustsideToClose } from "../../../hooks/useClickOustsideToClose";
import { loggOutUser } from "../../../redux/userSlice";
import { Navigate } from "react-router-dom";
import { handelDropDownClick } from "../../../redux/menuSlice";

const DropDownUserMenu = () => {
  const { admin } = useSelector((state: any) => state.userReducer);
  console.log(admin);
  const dispatch = useDispatch();
  const menuRef = useRef(null);
  const { userMenu, firstTooglge } = useSelector(
    (state: RootState) => state.showActiveMenuReducer
  );
  useClickOustsideToClose(menuRef);

  const handleLoggout = () => {
    dispatch(handelDropDownClick());
    dispatch(loggOutUser());
  };
  return (
    <>
      {firstTooglge ? (
        <styles.UserMenu
          ref={menuRef}
          animation={userMenu ? "open-animation" : "close-animation"}
        >
          <styles.Link
            onClick={() => dispatch(handelDropDownClick())}
            animation={userMenu ? "open-animation-nav" : "close-animation-nav"}
            to={"/myBooking"}
          >
            MyBookings
          </styles.Link>
          <styles.Link
            onClick={() => dispatch(handelDropDownClick())}
            animation={userMenu ? "open-animation-nav" : "close-animation-nav"}
            to={"/settings"}
          >
            Settings
          </styles.Link>
          {admin ? (
            <styles.Link
              onClick={() => dispatch(handelDropDownClick())}
              animation={
                userMenu ? "open-animation-nav" : "close-animation-nav"
              }
              to={"/createUser"}
            >
              Add User
            </styles.Link>
          ) : null}
          <styles.Link
            onClick={handleLoggout}
            animation={userMenu ? "open-animation-nav" : "close-animation-nav"}
            to={"/"}
          >
            Loggout
          </styles.Link>
        </styles.UserMenu>
      ) : null}
    </>
  );
};

export default DropDownUserMenu;

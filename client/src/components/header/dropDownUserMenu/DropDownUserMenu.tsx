import { useDispatch, useSelector } from "react-redux";
import * as styles from "./dropDownUserMenu.styles";
import { RootState } from "../../../redux/store";
import { useRef } from "react";
import { useClickOustsideToClose } from "../../../hooks/useClickOustsideToClose";
import { loggOutUser } from "../../../redux/userSlice";
import { Navigate } from "react-router-dom";

const DropDownUserMenu = () => {
  const user = useSelector((state: any) => state.userMenu);
  const dispatch = useDispatch();
  const menuRef = useRef(null);
  const { userMenu, firstTooglge } = useSelector(
    (state: RootState) => state.showActiveMenuReducer
  );
  useClickOustsideToClose(menuRef);
  const handleLoggout = () => {
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
            animation={userMenu ? "open-animation-nav" : "close-animation-nav"}
            to={"/"}
          >
            MyBookings
          </styles.Link>
          <styles.Link
            animation={userMenu ? "open-animation-nav" : "close-animation-nav"}
            to={"/"}
          >
            Settings
          </styles.Link>
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

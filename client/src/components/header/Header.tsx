import { useDispatch, useSelector } from "react-redux";
import * as styles from "./header.styles";
import { toogleMenu } from "../../redux/menuSlice";
import DropDownUserMenu from "./dropDownUserMenu/DropDownUserMenu";
import { RootState } from "../../redux/store";

const Header = () => {
  const { userMenu } = useSelector(
    (state: RootState) => state.showActiveMenuReducer
  );
  const dispatch = useDispatch();

  return (
    <styles.Container>
      {!userMenu ? (
        <styles.User onClick={() => dispatch(toogleMenu())}></styles.User>
      ) : (
        <styles.UserDark></styles.UserDark>
      )}
      <DropDownUserMenu />
    </styles.Container>
  );
};

export default Header;

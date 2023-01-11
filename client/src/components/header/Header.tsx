import { useDispatch, useSelector } from "react-redux";
import * as styles from "./header.styles";
import { toogleMenu } from "../../redux/menuSlice";
import DropDownUserMenu from "./dropDownUserMenu/DropDownUserMenu";
import { RootState } from "../../redux/store";
import { useEffect, useState } from "react";
import MailPopUp from "../mailPopUp/MailPopUp";
import { getReminder } from "../../api/getReminder";
import { Ireminder } from "../../types/reminderTypes";
import ReminderPopUp from "./reminderPopUp/ReminderPopUp";

const Header = () => {
  const [toogleMailPopUp, setToogleMailPopUp] = useState(false);
  const [reminder, setReminder] = useState<Ireminder | null>(null);
  const { userMenu } = useSelector(
    (state: RootState) => state.showActiveMenuReducer
  );
  const fetchWraper = async () => {
    const data = await getReminder();
    if (data) {
      setReminder(data);
    }
  };
  const dispatch = useDispatch();
  useEffect(() => {
    fetchWraper();
  }, []);
  console.log(reminder, "reminder");

  return (
    <styles.Container>
      {reminder && (
        <ReminderPopUp setReminder={setReminder} reminder={reminder} />
      )}
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

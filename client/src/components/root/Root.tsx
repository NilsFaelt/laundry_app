import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { RootState } from "../../redux/store";
import Header from "../header/Header";
import Login from "../login/login/Login";
import Navbar from "../navbar/Navbar";
import * as styles from "./root.styles";

const Root = () => {
  const navigate = useNavigate();
  const user = useSelector((state: RootState) => state.userReducer);

  useEffect(() => {
    navigate("/myBooking");
  }, [user]);
  return (
    <styles.Container>
      {user ? <Header /> : null}
      {user ? <Outlet /> : <Login />}
      {user ? <Navbar /> : null}
    </styles.Container>
  );
};

export default Root;

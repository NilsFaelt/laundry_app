import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { RootState } from "../../redux/store";
import { loginUser } from "../../redux/userSlice";
import { UserTypeWithNestedAdress } from "../../types/userType";
import Header from "../header/Header";
import Head from "../Helmet/Head";
import Login from "../login/login/Login";
import Navbar from "../navbar/Navbar";
import * as styles from "./root.styles";
import { typeCheckUser } from "./utils/typeCheckUser";

const Root = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state: RootState) => state.userReducer.user);

  useEffect(() => {
    const userFromLocaal = localStorage.getItem("user");
    if (typeof userFromLocaal === "string") {
      const parsedUser = JSON.parse(userFromLocaal);
      if (typeCheckUser(parsedUser)) dispatch(loginUser(parsedUser));
    }
  }, []);

  useEffect(() => {
    navigate("/myBooking");
  }, [user]);
  return (
    <styles.Container>
      <Head />
      {user ? <Header /> : null}
      {user ? <Outlet /> : <Login />}
      {user ? <Navbar /> : null}
    </styles.Container>
  );
};

export default Root;

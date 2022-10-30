import { Navigate, Outlet } from "react-router-dom";
import Header from "../header/Header";
import Navbar from "../navbar/Navbar";
import * as styles from "./root.styles";

const Root = () => {
  const logedin = true;
  return (
    <styles.Container>
      <Header />
      {logedin ? <Outlet /> : <Navigate to={"/login"} />}
      <Navbar />
    </styles.Container>
  );
};

export default Root;

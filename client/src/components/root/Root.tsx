import Header from "../header/Header";
import Login from "../login/login/Login";
import Navbar from "../navbar/Navbar";
import * as styles from "./root.styles";

const Root = () => {
  const logedin = true;
  return (
    <styles.Container>
      <Header />
      <Login />
      <Navbar />
    </styles.Container>
  );
};

export default Root;

import Header from "../header/Header";
import Navbar from "../navbar/Navbar";
import * as styles from "./root.styles";

const Root = () => {
  return (
    <styles.Container>
      <Header />
      <Navbar />
    </styles.Container>
  );
};

export default Root;

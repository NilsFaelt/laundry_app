import * as styles from "./navbar.styles";

const Navbar = () => {
  return (
    <styles.Container>
      <styles.Calendar></styles.Calendar>
      <styles.Laundry></styles.Laundry>
      <styles.Forum></styles.Forum>
    </styles.Container>
  );
};

export default Navbar;

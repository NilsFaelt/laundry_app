import * as styles from "./navbar.styles";

const Navbar = () => {
  return (
    <styles.Container>
      <styles.Link to={"/myBooking"}>
        <styles.Calendar></styles.Calendar>
      </styles.Link>
      <styles.Link to={"/myBooking"}>
        <styles.MyBookings></styles.MyBookings>
      </styles.Link>
      <styles.Link to={"/myBooking"}>
        <styles.Forum></styles.Forum>
      </styles.Link>
    </styles.Container>
  );
};

export default Navbar;

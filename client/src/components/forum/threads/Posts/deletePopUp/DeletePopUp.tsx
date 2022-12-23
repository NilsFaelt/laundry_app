import * as styles from "./deletePopUp.stye";

const DeletePopUp = () => {
  return (
    <styles.container>
      <styles.P>Sure you wanna delete post?</styles.P>
      <styles.BtnDiv>
        <styles.PstvBtn>Yes</styles.PstvBtn>
        <styles.DangerBtn>No</styles.DangerBtn>
      </styles.BtnDiv>
    </styles.container>
  );
};

export default DeletePopUp;

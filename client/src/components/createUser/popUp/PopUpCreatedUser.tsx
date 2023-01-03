import { UserType } from "../../../types/userType";
import * as styles from "./popUpCreatedUser.style";

interface Props {
  user: UserType;
  setCreatedUser: (toogle: null) => void;
  text: string;
}

const PopUpCreatedUser: React.FC<Props> = ({ user, setCreatedUser, text }) => {
  return (
    <styles.Container onClick={() => setCreatedUser(null)}>
      <styles.Title>
        {user?.email}: {text}
      </styles.Title>
    </styles.Container>
  );
};

export default PopUpCreatedUser;

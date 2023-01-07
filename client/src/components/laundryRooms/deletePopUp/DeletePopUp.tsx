import { useDispatch } from "react-redux";
import { deleteLaundryRoom } from "../../../api/deleteLaundryRoom";
import { removeLaundryRoom } from "../../../redux/laundryRoomsSlice";
import * as styles from "./deletePopUp.style";
interface Props {
  setTooglePopUp: React.Dispatch<React.SetStateAction<boolean>>;
  roomId: string;
}
const DeletePopUp = ({ setTooglePopUp, roomId }: Props) => {
  const dispatch = useDispatch();
  const deleteOnClick = (id: string) => {
    deleteLaundryRoom(id);
    dispatch(removeLaundryRoom(id));
    setTooglePopUp(false);
  };
  return (
    <styles.container>
      <styles.P>Delete room?</styles.P>
      <styles.BtnDiv>
        <styles.PstvBtn onClick={() => deleteOnClick(roomId)}>
          Delete
        </styles.PstvBtn>
        <styles.DangerBtn onClick={() => setTooglePopUp(false)}>
          No
        </styles.DangerBtn>
      </styles.BtnDiv>
    </styles.container>
  );
};

export default DeletePopUp;

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addRoom } from "../../api/addLaundryRoom";
import { addSingleLaundryRoom } from "../../redux/laundryRoomsSlice";
import { RootState } from "../../redux/store";
import DeletePopUp from "./deletePopUp/DeletePopUp";
import * as styles from "./laundryRooms.style";

const Laundryrooms = () => {
  const [tooglePopUp, setTooglePopUp] = useState(false);
  const [roomId, setRoomId] = useState("");
  const [roomInput, setRoomInput] = useState("");

  const dispatch = useDispatch();

  const rooms = useSelector(
    (state: RootState) => state.laundryRoomReducer.laundryRooms
  );

  const deleteLaundryRoom = async (id: string) => {
    setTooglePopUp(true);
    setRoomId(id);
  };

  const addLaundryRoom = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = await addRoom(roomInput);
    if (data) dispatch(addSingleLaundryRoom(data));
  };

  return (
    <styles.BackgroundContainer>
      <styles.Container>
        {tooglePopUp ? (
          <DeletePopUp roomId={roomId} setTooglePopUp={setTooglePopUp} />
        ) : null}
        <styles.LaundryRoomsContainer>
          {rooms?.map((room) => {
            return (
              <styles.EachRoomContainer key={room._id}>
                <span>LaundryRoom:</span> {room.laundryRoom}
                <styles.Delete onClick={() => deleteLaundryRoom(room._id)} />
              </styles.EachRoomContainer>
            );
          })}
        </styles.LaundryRoomsContainer>
        <styles.Form
          onSubmit={(e: React.FormEvent<HTMLFormElement>) => addLaundryRoom(e)}
        >
          <styles.Label>Add LaundryRoom</styles.Label>
          <styles.Input
            required
            value={roomInput}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setRoomInput(e.target.value)
            }
          />
          <styles.Btn>Add</styles.Btn>
        </styles.Form>
      </styles.Container>
    </styles.BackgroundContainer>
  );
};

export default Laundryrooms;

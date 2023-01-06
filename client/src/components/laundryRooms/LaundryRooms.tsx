import { useState } from "react";
import * as styles from "./laundryRooms.style";

const Laundryrooms = () => {
  const [roomInput, setRoomInput] = useState("");
  const dummy = ["room1", "room1", "room1", "room1"];
  const deleteLaundryRoom = () => {
    console.log("delete");
  };
  const addLaundryRoom = () => {
    console.log("add");
  };
  return (
    <styles.BackgroundContainer>
      <styles.Container>
        <styles.LaundryRoomsContainer>
          {dummy.map((room) => {
            return (
              <styles.EachRoomContainer>
                room
                <styles.Delete onClick={() => deleteLaundryRoom()} />
              </styles.EachRoomContainer>
            );
          })}
        </styles.LaundryRoomsContainer>
        <styles.Label>Add LaundryRoom</styles.Label>
        <styles.Input
          value={roomInput}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setRoomInput(e.target.value)
          }
        />
        <styles.Btn onClick={() => addLaundryRoom()}>Add</styles.Btn>
      </styles.Container>
    </styles.BackgroundContainer>
  );
};

export default Laundryrooms;

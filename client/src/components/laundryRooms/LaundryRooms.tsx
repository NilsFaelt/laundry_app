import { useEffect, useState } from "react";
import { addRoom } from "../../api/addLaundryRoom";
import { getAllRooms } from "../../api/getAllRooms";
import { LaundryRoom } from "../../types/laundryRoom";
import * as styles from "./laundryRooms.style";

const Laundryrooms = () => {
  const [rooms, setRooms] = useState<LaundryRoom[]>([]);
  const [roomInput, setRoomInput] = useState("");
  const dummy = ["room1", "room1", "room1", "room1"];

  const fetchWrapper = async () => {
    const data = await getAllRooms();
    setRooms(data);
    console.log(data);
  };

  useEffect(() => {
    fetchWrapper();
  }, []);
  const deleteLaundryRoom = () => {
    console.log("delete");
  };
  const addLaundryRoom = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addRoom(roomInput);
  };
  return (
    <styles.BackgroundContainer>
      <styles.Container>
        <styles.LaundryRoomsContainer>
          {rooms.map((room) => {
            return (
              <styles.EachRoomContainer>
                <span>LaundryRoom:</span> {room.laundryRoom}
                <styles.Delete onClick={() => deleteLaundryRoom()} />
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

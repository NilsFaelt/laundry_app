import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LaundryRoom } from "../types/laundryRoom";

interface InitialState {
  laundryRooms: LaundryRoom[];
}

const initialState: InitialState = {
  laundryRooms: [],
};
const laundryRoomsSlice = createSlice({
  name: "laundryRoomsSlice",
  initialState,
  reducers: {
    addLaundryRooms: (state, action: PayloadAction<LaundryRoom[]>) => {
      state.laundryRooms = action.payload;
    },
    addLaundryRoom: (state, action: PayloadAction<LaundryRoom>) => {
      [...state.laundryRooms, action.payload];
      console.log(state.laundryRooms), "initial breaaaa";
    },
    removeLaundryRoom: (state: InitialState, action: PayloadAction<string>) => {
      state.laundryRooms = state.laundryRooms.filter(
        (room) => room._id !== action.payload
      );
    },
  },
});

export const { addLaundryRooms, removeLaundryRoom, addLaundryRoom } =
  laundryRoomsSlice.actions;
export default laundryRoomsSlice.reducer;

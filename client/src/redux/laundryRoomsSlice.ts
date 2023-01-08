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
    addSingleLaundryRoom: (state, action: PayloadAction<LaundryRoom>) => {
      state.laundryRooms = [...state.laundryRooms, action.payload];
    },
    removeLaundryRoom: (state: InitialState, action: PayloadAction<string>) => {
      state.laundryRooms = state.laundryRooms.filter(
        (room) => room._id !== action.payload
      );
    },
  },
});

export const { addLaundryRooms, removeLaundryRoom, addSingleLaundryRoom } =
  laundryRoomsSlice.actions;
export default laundryRoomsSlice.reducer;

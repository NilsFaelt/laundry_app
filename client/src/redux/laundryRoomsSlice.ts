import {
  createSlice,
  PayloadAction,
  createAsyncThunk,
  ThunkAction,
} from "@reduxjs/toolkit";
import axios from "axios";
import { apiConfig } from "../api/apiConifig";
import { LaundryRoom } from "../types/laundryRoom";
import ThunkApp from 

interface InitialState {
  laundryRooms: LaundryRoom[];
  status: "idle" | "laoding" | "succeded" | "failed";
  error: any;
}

const initialState: InitialState = {
  laundryRooms: [],
  status: "idle",
  error: null,
};

export const getLaundryRoomsThunk = createAsyncThunk(
  "laundryroom/add",
  async () => {
    try {
      const data = await axios(
        `http://${apiConfig.url}:${apiConfig.port}/laundryroom`
      );

      return data.data.rooms;
    } catch (err: any) {
      throw { msg: err, stack: err.stack };
    }
  }
);

const laundryRoomsSlice = createSlice({
  name: "laundryRoomsSlice",
  initialState,
  reducers: {
    addLaundryRooms: (state, action: PayloadAction<LaundryRoom[]>) => {
      console.log(action.payload, "love action");
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
  extraReducers: (builder) => {
    builder.addCase(getLaundryRoomsThunk.fulfilled, (state, action) => {
      state.laundryRooms = action.payload;
    });
  },
});

export const { addLaundryRooms, removeLaundryRoom, addLaundryRoom } =
  laundryRoomsSlice.actions;
export default laundryRoomsSlice.reducer;

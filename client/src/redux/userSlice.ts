import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserTypeWithNestedAdress } from "../types/userType";

const initialState: UserTypeWithNestedAdress | null = null;

const userLslice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      return action.payload;
    },
    loggOutUser: (state) => {
      return null;
    },
  },
});

export const { loginUser, loggOutUser } = userLslice.actions;
export default userLslice.reducer;

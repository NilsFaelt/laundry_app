import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserTypeWithNestedAdress } from "../types/userType";

interface Action {
  state: any;
  payload: UserTypeWithNestedAdress;
}
const initialState: UserTypeWithNestedAdress | null = null;

const userLslice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      return action.payload;
    },
    loggOutUser: () => {
      return null;
    },
  },
});

export const { loginUser, loggOutUser } = userLslice.actions;
export default userLslice.reducer;

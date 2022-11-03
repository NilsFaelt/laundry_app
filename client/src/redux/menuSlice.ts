import { createSlice } from "@reduxjs/toolkit";
import { ShowActiveMenuSlice } from "../types/reduxTypes";

const initialState: ShowActiveMenuSlice = {
  calendar: false,
  bookings: false,
  chat: false,
  userMenu: false,
  firstTooglge: false,
};

const showActiveMenuSlice = createSlice({
  name: "showActiveMenu",
  initialState,
  reducers: {
    activateCalendar: (state) => {
      return {
        ...state,
        calendar: true,
        bookings: false,
        chat: false,
        userMenu: false,
      };
    },

    activateBooking: (state) => {
      return {
        ...state,
        calendar: false,
        bookings: true,
        chat: false,
        userMenu: false,
      };
    },
    activateChat: (state) => {
      return {
        ...state,
        calendar: false,
        bookings: false,
        chat: true,
        userMenu: false,
      };
    },
    toogleMenu: (state) => {
      return { ...state, userMenu: true, firstTooglge: true };
    },
    closeOusideClick: (state) => {
      return { ...state, userMenu: false };
    },
    handelDropDownClick: (state) => {
      return {
        ...state,
        calendar: false,
        bookings: false,
        chat: false,
        userMenu: false,
      };
    },
  },
});

export const {
  activateCalendar,
  activateBooking,
  activateChat,
  toogleMenu,
  closeOusideClick,
  handelDropDownClick,
} = showActiveMenuSlice.actions;
export default showActiveMenuSlice.reducer;

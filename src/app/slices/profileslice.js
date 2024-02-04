"use client";
import { createSlice } from "@reduxjs/toolkit";
const initialstate = {
  user: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null,
};

const profileSlice = createSlice({
  name: "profile",
  initialState: initialstate,
  reducers: {
    setUser(state, value) {
      state.user = value.payload;
      let userdata = JSON.stringify(state.user);
      // console.log("trying to get the user data", userdata);
      localStorage.setItem("user", userdata);
    },
  },
});

export const { setUser } = profileSlice.actions;
export default profileSlice.reducer;

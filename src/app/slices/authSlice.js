"use client";
import { createSlice, current } from "@reduxjs/toolkit";
const initialstate = {
  signupData: null,
  loading: false,
  token: localStorage.getItem("token")
    ? JSON.parse(localStorage.getItem("token"))
    : null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialstate,
  reducers: {
    setToken(state, value) {
      state.token = value.payload;
      let tokendata = JSON.stringify(state.token);
      // console.log("trying to get tokendata", tokendata);
      localStorage.setItem("token", tokendata);
    },
    setSignupData(state, value) {
      state.signupData = value.payload;
    },
    setLoading(state, value) {
      state.loading = value.payload;
    },
  },
});

export const { setToken, setSignupData, setLoading } = authSlice.actions;
export default authSlice.reducer;

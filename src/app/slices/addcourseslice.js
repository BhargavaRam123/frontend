"use client";
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  coursecreationstage: localStorage.getItem("stage")
    ? JSON.parse(localStorage.getItem("stage"))
    : 1,
};
const addcourseslice = createSlice({
  name: "coursestage",
  initialState,
  reducers: {
    setcoursecreationstage(state, value) {
      state.coursecreationstage = value.payload;
      let stageinfo = JSON.stringify(state.coursecreationstage);
      localStorage.setItem("stage", stageinfo);
    },
  },
});

export const { setcoursecreationstage } = addcourseslice.actions;
export default addcourseslice.reducer;

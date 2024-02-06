"use client";
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  coursecreationstage: 1,
  course: null,
  editCourse: false,
  paymentLoading: false,
};
const addcourseslice = createSlice({
  name: "coursestage",
  initialState,
  reducers: {
    setcoursecreationstage(state, value) {
      state.coursecreationstage = value.payload;
    },
    setCourse: (state, action) => {
      state.course = action.payload;
    },
    setEditCourse: (state, action) => {
      state.editCourse = action.payload;
    },
    setPaymentLoading: (state, action) => {
      state.paymentLoading = action.payload;
    },
    resetCourseState: (state) => {
      state.step = 1;
      state.course = null;
      state.editCourse = false;
    },
  },
});

export const {
  setcoursecreationstage,
  setCourse,
  setEditCourse,
  setPaymentLoading,
  resetCourseState,
} = addcourseslice.actions;
export default addcourseslice.reducer;

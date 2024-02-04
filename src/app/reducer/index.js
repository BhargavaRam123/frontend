"use client";
import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "../slices/authSlice.js";
import profileReducer from "../slices/profileslice.js";
import cartReducer from "../slices/cartSlice.js";
import coursestageReducer from "../slices/addcourseslice.js";

const rootReducer = combineReducers({
  auth: authReducer,
  profile: profileReducer,
  cart: cartReducer,
  coursestage: coursestageReducer,
});

export default rootReducer;

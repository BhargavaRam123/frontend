"use client"
import toast from "react-hot-toast"
import { createSlice } from "@reduxjs/toolkit";
const initialstate = {
    totalItems: localStorage.getItem("totalItems") ? JSON.parse(localStorage.getItem("totalItems")) : 0
}

const cartSlice = createSlice({
    name: "cart",
    initialState: initialstate,
    reducers: {
        setTotalItems(state, value) {
            state.token = value.payload
        }
    }
})

export const { setTotalItems } = cartSlice.actions
export default cartSlice.reducer
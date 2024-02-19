import { createSlice } from "@reduxjs/toolkit";
import ProductData from "../ProductData";

const initialState = {
  cart: [],
  items: ProductData,
  totalQuantity: 0,
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {},
});

export default cartSlice.reducer;

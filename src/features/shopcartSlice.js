import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartShopSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      if (existingItem) {
        existingItem.quantity++,
          (existingItem.totalPrice = existingItem.totalPrice + newItem.price);
      } else {
        state.items.push({
          ...newItem,
          quantity: 0,
          totalPrice: newItem.price,
        });
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== existingItem.id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },
    deleteItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem) {
        state.items = state.items.filter((item) => item.id !== existingItem.id);
      }
    },
  },
});

export const { deleteItemFromCart, addItemToCart, removeItemFromCart } =
  cartShopSlice.actions;

export default cartShopSlice;

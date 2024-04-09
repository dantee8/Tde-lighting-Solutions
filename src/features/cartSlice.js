import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);

      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({
          ...newItem,
        });
      }
    },
    removeFromCart: (state, action) => {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem.quantity === 0) {
        state.items = state.items.filter((item) => item.id !== existingItem.id);
      } else {
        existingItem.quantity--;
      }
    },
    incrementCartItem: (state, action) => {
      const id = action.payload;
      const item = state.items.find((item) => item.id === id);
      if (item) {
        item.quantity++;
      }
    },
    decrementCartItem: (state, action) => {
      const id = action.payload;
      const item = state.items.find((item) => item.id === id);
      if (item && item.quantity > 1) {
        item.quantity--;
      }
    },
    deleteFromCart: (state, action) => {
      const item = action.payload;
      state.items = state.items.filter((i) => i.id !== item.id);
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  deleteFromCart,
  incrementCartItem,
  decrementCartItem,
} = cartSlice.actions;
export default cartSlice.reducer;

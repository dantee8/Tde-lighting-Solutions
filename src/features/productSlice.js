import { createSlice } from "@reduxjs/toolkit";
import { products } from "../data";

const initialState = {
  products: products, 
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    handleQuantityIncrement: (state, action) => {
      const { productId } = action.payload;
      const productToUpdate = state.products.find(
        (product) => product.id === productId
      )

      if (productToUpdate) {
        state.products = state.products.map((product) =>
          product.id === productId
            ? { ...product, quantity: product.quantity + 1 }
            : product
        );
      }
    },

    handleQuantityDecrement: (state, action) => {
      const { productId } = action.payload;
      const productToUpdate = state.products.find(
        (product) => product.id === productId
      );
      if (productToUpdate && productToUpdate.quantity > 0) {
        state.products = state.products.map((product) =>
          product.id === productId
            ? { ...product, quantity: product.quantity - 1 }
            : product
        );
      }
    },
  },
});

export const { handleQuantityDecrement, handleQuantityIncrement } =
  productSlice.actions;

export default productSlice.reducer;

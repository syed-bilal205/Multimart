import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  totalAmount: 0,
  quantity: 0,
  shippingAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItems: (state, action) => {
      const newItems = action.payload;
      const existingItems = state.cart.find((item) => item.id === newItems.id);

      state.quantity++;

      if (!existingItems) {
        state.cart.push({
          id: newItems.id,
          productName: newItems.productName,
          image: newItems.imgUrl,
          price: newItems.price,
          quantity: 1,
          totalPrice: newItems.price,
        });
      } else {
        existingItems.quantity++;
        existingItems.totalPrice += Number(newItems.price);
      }
      state.totalAmount = state.cart.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),
        0
      );
      state.shippingAmount = state.cart.reduce(
        (total, item) =>
          total + Number(item.price) * Number(item.quantity) + 50,
        0
      );
      // console.log(state.cart);
    },
    // Delete the product

    removeItem: (state, action) => {
      const itemId = action.payload;
      const itemIndex = state.cart.findIndex((item) => item.id === itemId);

      if (itemIndex !== -1) {
        state.quantity -= state.cart[itemIndex].quantity;
        state.totalAmount -= state.cart[itemIndex].totalPrice;
        state.cart.splice(itemIndex, 1);
      }
    },
  },
});

export const { addItems, removeItem } = cartSlice.actions;

export default cartSlice.reducer;

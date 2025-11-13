import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      // action.payload = {id, name, qty, price ... }
      const existing = state.find(
        (item) =>
          item.id === action.payload.id &&
          item.option_id === action.payload.option_id
      );
      if (existing) {
        existing.qty += action.payload.qty; // 같은 상품이면 수량 증가
      } else {
        state.push(action.payload); // 새로 담기
      }
    },
    removeItem: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    changeQty: (state, action) => {
      const { id, delta } = action.payload;
      const item = state.find((item) => item.id === id);
      if (item) {
        item.qty = Math.max(1, item.qty + delta); // 최소 1개 유지
      }
    },
    clearCart: (state) => {
      return (state = []);
    },
  },
});

export const { addItem, removeItem, changeQty, clearCart } = cartSlice.actions;
export default cartSlice.reducer;

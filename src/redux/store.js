import { configureStore } from "@reduxjs/toolkit";

import productRegisterSlice from "./slices/features/admin/product/productRegisterSlice";
import cartReducer from "./slices/features/cart/cartSlice";

export default configureStore({
  reducer: {
    productRegisterSlice: productRegisterSlice,
    cart: cartReducer,
  },
});

import { configureStore } from "@reduxjs/toolkit";

import productRegisterSlice from "./slices/features/admin/product/productRegisterSlice";
import couponRegisterSlice from "./slices/features/admin/coupon/couponRegisterSlice";
import cartReducer from "./slices/features/cart/cartSlice";

export default configureStore({
  reducer: {
    productRegisterSlice: productRegisterSlice,
    couponRegisterSlice: couponRegisterSlice,
    cart: cartReducer,
  },
});

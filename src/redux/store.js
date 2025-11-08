import { configureStore } from "@reduxjs/toolkit";

import productRegisterSlice from "./slices/features/admin/product/productRegisterSlice";
import couponRegisterSlice from "./slices/features/admin/coupon/couponRegisterSlice";
import couponSearchSlice from "./slices/features/admin/coupon/couponSearchSlice";
import cartReducer from "./slices/features/cart/cartSlice";

export default configureStore({
  reducer: {
    productRegisterSlice: productRegisterSlice,
    couponRegisterSlice: couponRegisterSlice,
    couponSearchSlice: couponSearchSlice,
    cart: cartReducer,
  },
});

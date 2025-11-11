import { configureStore } from "@reduxjs/toolkit";

import productRegisterSlice from "./slices/features/admin/product/productRegisterSlice";
import couponRegisterSlice from "./slices/features/admin/coupon/couponRegisterSlice";
import couponSearchSlice from "./slices/features/admin/coupon/couponSearchSlice";
import sendMessageSlice from "./slices/features/admin/message/sendMessageSlice";
import cartReducer from "./slices/features/cart/cartSlice";
import userSlice from "./slices/features/user/userSlice";
import reviewRatingSlice from "./slices/features/review/reviewRatingSlice";
import reviewSlice from "./slices/features/review/reviewSlice";

export default configureStore({
  reducer: {
    productRegisterSlice: productRegisterSlice,
    couponRegisterSlice: couponRegisterSlice,
    couponSearchSlice: couponSearchSlice,
    sendMessageSlice: sendMessageSlice,
    cart: cartReducer,
    userSlice: userSlice,
    reviewRatingSlice: reviewRatingSlice,
    reviewSlice: reviewSlice,
  },
});

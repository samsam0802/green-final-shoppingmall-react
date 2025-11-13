import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./slices/features/cart/cartSlice";
import userSlice from "./slices/features/user/userSlice";
import reviewRatingSlice from "./slices/features/review/reviewRatingSlice";
import reviewSlice from "./slices/features/review/reviewSlice";

export default configureStore({
  reducer: {
    cart: cartReducer,
    userSlice: userSlice,
    reviewRatingSlice: reviewRatingSlice,
    reviewSlice: reviewSlice,
  },
});

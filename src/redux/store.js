import { configureStore } from "@reduxjs/toolkit";

import productRegisterSlice from "./slices/features/admin/product/productRegisterSlice";

export default configureStore({
  reducer: {
    productRegisterSlice: productRegisterSlice,
  },
});

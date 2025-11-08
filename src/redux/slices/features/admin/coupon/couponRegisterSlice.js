import { createSlice } from "@reduxjs/toolkit";

const initState = {
  basicInfo: {},
  discountSetting: {},
  IssueSetting: {},
  periodSetting: {},
};

const couponRegisterSlice = createSlice({
  name: "couponRegisterSlice",
  initialState: {
    ...initState,
  },
  reducers: {
    updateCouponRegisterForm: (state, action) => {
      const { section, data } = action.payload;
      state[section] = data;
    },
  },
});

export const { updateCouponRegisterForm } = couponRegisterSlice.actions;
export default couponRegisterSlice.reducer;

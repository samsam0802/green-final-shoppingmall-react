import { createSlice } from "@reduxjs/toolkit";

const initState = {
  searchType: "name",
  searchKeyword: "",
  createdFrom: "",
  createdTo: "",
  discountType: ["PERCENTAGE"],
  issuranceType: ["MANUAL"],
  availability: ["USABLE"],
};

const couponSearchSlice = createSlice({
  name: "couponSearchSlice",
  initialState: initState,
  reducers: {
    updateCouponSearchFilter: (state, action) => {
      return action.payload;
    },
  },
});

export const { updateCouponSearchFilter } = couponSearchSlice.actions;
export default couponSearchSlice.reducer;

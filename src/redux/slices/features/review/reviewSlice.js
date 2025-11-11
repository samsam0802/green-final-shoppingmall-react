import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  reviewList: [],
  images: [],

  selectedSort: "최신순",
  sortOptions: ["최신순", "좋아요순", "높은별점순", "낮은별점순"],

  selectedOption: "옵션",
  options: ["옵션1", "옵션2", "옵션3", "옵션4"],
};
const reviewSlice = createSlice({
  name: "reviewSlice",
  initialState: initialState,
  reducers: {
    addReview: (state, action) => {
      state.reviewList.push(action.payload);
    },

    modifyReview: (state, action) => {
      const { idx, updatedReview } = action.payload;
      if (state.reviewList[idx]) {
        state.reviewList[idx] = { ...state.reviewList[idx], ...updatedReview };
      }
    },

    deleteReview: (state, action) => {
      state.reviewList = state.reviewList.filter(
        (review, idx) => idx !== action.payload
      );
    },

    addImage: (state, action) => {
      state.images.push(action.payload);
    },

    removeImage: (state, action) => {
      state.images = state.images.filter((img, idx) => idx !== action.payload);
    },

    setSort: (state, action) => {
      console.log("sortOptions");
      state.selectedSort = action.payload;
    },

    setOption: (state, action) => {
      console.log("options");
      state.selectedOption = action.payload;
    },
  },
});
export const {
  addReview,
  modifyReview,
  deleteReview,
  addImage,
  removeImage,
  setSort,
  setOption,
} = reviewSlice.actions;
export default reviewSlice.reducer;

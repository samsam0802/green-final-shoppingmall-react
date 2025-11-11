import { createSlice } from "@reduxjs/toolkit";

//임시로 직접 넣은 데이터
const initialState = {
  averageScore: 4.8,
  positivePercentage: 96,
  totalReviews: 116,
  scoreData: [
    { label: "아주 좋아요 (5점)", count: 115, score: 5 },
    { label: "맘에 들어요 (4점)", count: 1, score: 4 },
    { label: "보통이에요 (3점)", count: 0, score: 3 },
    { label: "그냥 그래요 (2점)", count: 0, score: 2 },
    { label: "별로예요 (1점)", count: 0, score: 1 },
  ],
};

const reviewRatingSlice = createSlice({
  name: "reviewRatingSlice",
  initialState: initialState,
  reducers: {
    setReviewRatingData: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});
export const { setReviewRatingData } = reviewRatingSlice.actions;
export default reviewRatingSlice.reducer;

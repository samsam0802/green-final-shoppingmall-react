import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// export const postProductRegisterAsync = createAsyncThunk(
//   "postProductRegisterAsync",
//   (param) => {
//     return postProductRegister(param);
//   }
// );

const productRegisterSlice = createSlice({
  name: "productRegisterSlice",
  initialState: {
    category: {},
    brand: {},
    basicInfo: {},
    saleInfo: {},
    images: {},
    delivery: {},
    options: [],
  },
  reducers: {
    updateProductRegisterForm: (state, action) => {
      const { section, data } = action.payload;
      // 기존 state[section]이 객체이고, 들어오는 data도 객체일 경우 병합
      if (
        typeof state[section] === "object" &&
        !Array.isArray(state[section]) &&
        typeof data === "object"
      ) {
        state[section] = { ...state[section], ...data };
      } else {
        // 배열이나 기본 타입은 그냥 대체 (기존 로직 유지)
        state[section] = data;
      }
      console.log(state);
    },
  },
});

// Redux Toolkit은 이 reducer를 정의하면서 자동으로 동일한 이름의 action creator를 만들어준다.

export const { updateProductRegisterForm } = productRegisterSlice.actions;
export default productRegisterSlice.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const uploadImagesAndRegisterProduct = createAsyncThunk(
  "productRegisterSlice/uploadImagesAndRegisterProduct",

  async (fileObjects, { rejectWithValue }) => {
    try {
      const formData = new FormData();
      formData.append("images", fileObjects);

      // S3 업로드 API 호출
      const res = await axios.post("/api/s3/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      const s3ImageUrls = res.data.imageUrls;

      return s3ImageUrls;
    } catch (error) {
      console.log("error 발생 : ", error);
    }
  }
);

const productRegisterSlice = createSlice({
  name: "productRegisterSlice",
  initialState: {
    formData: {
      category: {},
      brand: {},
      basicInfo: {},
      saleInfo: {},
      mainImages: [],
      descriptionImages: [],
      delivery: {},
      options: [],
    },

    status: "idle",
    error: null,
  },
  reducers: {
    updateProductRegisterForm: (state, action) => {
      state.formData = action.payload;
    },
  },
  // 비동기 Thunk 상태 처리
  extraReducers: (builder) => {
    builder
      .addCase(uploadImagesAndRegisterProduct.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.images = action.payload;
      })
      .addCase(uploadImagesAndRegisterProduct.pending, (state) => {
        state.status = "loading";
      })
      .addCase(uploadImagesAndRegisterProduct.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

// Redux Toolkit은 이 reducer를 정의하면서 자동으로 동일한 이름의 action creator를 만들어준다.

export const { updateProductRegisterForm } = productRegisterSlice.actions;
export default productRegisterSlice.reducer;

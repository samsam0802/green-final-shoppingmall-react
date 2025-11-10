import { createSlice } from "@reduxjs/toolkit";

const initState = {
  messageForm: { sendType: "SMS", messageContent: "" },
};

const sendMessageSlice = createSlice({
  name: "sendMessageSlice",
  initialState: initState,
  reducers: {
    updateMessage: (state, action) => {
      const { data } = action.payload;
      state.messageForm = data;
    },
  },
});

export const { updateMessage } = sendMessageSlice.actions;
export default sendMessageSlice.reducer;

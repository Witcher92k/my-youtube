import { createSlice } from "@reduxjs/toolkit";

// Live chat can receive messages forever — keep only the latest N so the
// store (and the DOM) don't grow without bound.
export const MAX_CHAT_MESSAGES = 50;

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    chatMessagesArray: [],
  },
  reducers: {
    addMessage: (state, action) => {
      state.chatMessagesArray.push(action.payload);
      if (state.chatMessagesArray.length > MAX_CHAT_MESSAGES) {
        state.chatMessagesArray.splice(
          0,
          state.chatMessagesArray.length - MAX_CHAT_MESSAGES
        );
      }
    },
  },
});

export const { addMessage } = chatSlice.actions;

export default chatSlice.reducer;

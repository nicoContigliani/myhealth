import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from "../store";

const messageSlice = createSlice({
  name: 'message',
  initialState: {
    message: 'Initial message'
  },
  reducers: {
    setMessage(state, action: PayloadAction<any>) {
      state.message = action.payload;
    }
  }
});

export const { setMessage } = messageSlice.actions;
export const selectMessage = (state: RootState) => state.message;


export default messageSlice.reducer;
import { createSlice } from '@reduxjs/toolkit';

const initialstate = {
  count: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducdrs: {
    add: (state) => {
      state.count += 1;
    },
    minus: (state) => {
      state.count -= 1;
    },
    addByAmount: (state, action) => {
      state.count += action.payload;
    },
  },
});

// action creator
export const { add, minus, addByAmount } = counterSlice.actions;

export default counterSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  realSecondsTime: null,
};

const calcAge = createSlice({
  name: "calculator",
  initialState,
  reducers: {
    getAge: (state, action) => {
      state.realSecondsTime = action.payload;
    },
  },
});

export const { getAge } = calcAge.actions;

export default calcAge.reducer;

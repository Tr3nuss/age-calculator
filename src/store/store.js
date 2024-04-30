import { configureStore } from "@reduxjs/toolkit";
import calculatorReducer from "./calcSlice/calcSlice";

export const store = configureStore({
  reducer: { calculator: calculatorReducer },
  devTools: true,
});

export default store;

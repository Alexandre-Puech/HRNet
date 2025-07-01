import { configureStore } from "@reduxjs/toolkit";
import employeeReducer from "./slices/employee.js";

export const store = configureStore({
  reducer: {
    employee: employeeReducer,
  },
});

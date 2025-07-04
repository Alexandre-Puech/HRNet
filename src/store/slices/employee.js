import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  employees: [],
};

export const employeeSlice = createSlice({
  name: "employee",
  initialState: initialState,
  reducers: {
    addEmployee(state, action) {
      state.employees.push(action.payload);
    },
  },
});

export const { addEmployee } = employeeSlice.actions;
export default employeeSlice.reducer;

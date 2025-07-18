import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  employees: [
    {
      firstName: "aa",
      lastName: "aa",
      dateOfBirth: "07/03/2025",
      startDate: "07/03/2025",
      department: "aa",
      street: "aa",
      city: "aa",
      livingState: "aa",
      zipCode: "1212",
    },
  ],
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

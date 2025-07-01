import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  firstName: "",
  lastName: "",
  dateOfBirth: "",
  startDate: "",
  department: "",
  street: "",
  city: "",
  livingState: "",
  zipCode: "",
};

export const employeeSlice = createSlice({
  name: "employee",
  initialState: initialState,
  reducers: {
    addEmployee(state, action) {
      const {
        firstName,
        lastName,
        dateOfBirth,
        startDate,
        department,
        street,
        city,
        livingState,
        zipCode,
      } = action.payload;
      state.firstName = firstName;
      state.lastName = lastName;
      state.dateOfBirth = dateOfBirth;
      state.startDate = startDate;
      state.department = department;
      state.street = street;
      state.city = city;
      state.livingState = livingState;
      state.zipCode = zipCode;
    },
  },
});

export const { addEmployee } = employeeSlice.actions;
export default employeeSlice.reducer;

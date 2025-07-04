export const initialFormData = {
  firstName: "",
  lastName: "",
  dateOfBirth: null,
  startDate: null,
  department: "",
  street: "",
  city: "",
  livingState: "",
  zipCode: "",
};

export const createEmptyFormData = () => ({ ...initialFormData });

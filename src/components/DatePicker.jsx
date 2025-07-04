import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { formatDateUS } from "../utils/dateFormat.js";

export default function DateField({ label, value, onChange }) {
  const id = label.toLowerCase().replace(/\s+/g, "-");
  const handleChange = (date) => {
    const formatted = formatDateUS(date);
    onChange?.(formatted);
  };

  return (
    <>
      <label htmlFor={id}>{label}</label>
      <DatePicker
        selected={value ? new Date(value) : null}
        onChange={handleChange}
        showMonthDropdown
        showYearDropdown
        dropdownMode="select"
        name={id}
        dateFormat="MM/dd/yyyy"
      />
    </>
  );
}

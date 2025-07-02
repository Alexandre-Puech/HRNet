import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function DateField({ label }) {
  const id = label.toLowerCase().replace(/\s+/g, "-");
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <>
      <label htmlFor={id}>{label}</label>
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        showMonthDropdown
        showYearDropdown
        dropdownMode="select"
      />
    </>
  );
}

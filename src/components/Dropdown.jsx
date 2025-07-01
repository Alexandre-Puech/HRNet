import { useState } from "react";

export default function Dropdown({ label, options = [] }) {
  const [selected, setSelected] = useState(
    options.length > 0 ? options[0].value ?? options[0] : ""
  );

  const handleChange = (e) => {
    setSelected(e.target.value);
  };

  return (
    <div className="dropdown-container">
      {label && <label className="dropdown-label">{label}</label>}
      <select className="dropdown" value={selected} onChange={handleChange}>
        {options.map((option, index) => {
          const value = option.value ?? option.abbreviation ?? option;
          const label = option.label ?? option.name ?? option;
          return (
            <option key={index} value={value}>
              {label}
            </option>
          );
        })}
      </select>
    </div>
  );
}

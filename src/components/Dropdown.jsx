import { Dropdown as DropdownBase } from "react-dropdown-oc-ap";
import "../styles/css/Dropdown.css";

export default function Dropdown({
  label,
  name,
  value,
  options = [],
  onChange,
  className = "",
  disabled = false,
  required = false,
}) {
  const id = name ?? label?.toLowerCase().replace(/\s+/g, "-");
  const handleChange = (selected) => {
    onChange?.(selected?.value ?? selected);
  };

  return (
    <div className={className}>
      <DropdownBase
        id={id}
        name={name}
        label={label}
        value={value}
        options={options}
        onChange={handleChange}
        disabled={disabled}
        required={required}
      />
    </div>
  );
}

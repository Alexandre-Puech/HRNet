export default function Dropdown({
  label,
  name,
  value,
  options = [],
  onChange,
}) {
  const id = name ?? label.toLowerCase().replace(/\s+/g, "-");

  const handleChange = (e) => {
    onChange?.(e.target.value);
  };

  return (
    <div className="dropdown-container">
      {label && (
        <label htmlFor={id} className="dropdown-label">
          {label}
        </label>
      )}
      <select
        className="dropdown"
        value={value ?? ""}
        onChange={handleChange}
        name={name}
        id={id}
      >
        {options.map((option, index) => {
          const optionValue = option.value ?? option.abbreviation ?? option;
          const label = option.label ?? option.name ?? option;
          return (
            <option key={index} value={optionValue}>
              {label}
            </option>
          );
        })}
      </select>
    </div>
  );
}

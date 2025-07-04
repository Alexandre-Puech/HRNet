export default function InputField({ label, type, value, onChange }) {
  const id = label.toLowerCase().replace(/\s+/g, "-");

  const handleChange = (e) => {
    onChange?.(e.target.value);
  };

  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        name={id}
        value={value ?? ""}
        onChange={handleChange}
      />
    </>
  );
}

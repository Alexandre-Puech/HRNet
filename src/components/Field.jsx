export default function InputField({ label, type }) {
  const id = label.toLowerCase().replace(/\s+/g, "-");

  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} name={id} />
    </>
  );
}

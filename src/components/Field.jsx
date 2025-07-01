export default function InputField({ label }) {
  const id = label.toLowerCase().replace(/\s+/g, "-");

  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input type="text" id={id} name={id} />
    </>
  );
}

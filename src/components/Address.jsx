import InputField from "./Field";

export default function Address() {
  return (
    <fieldset className="address">
      <legend>Address</legend>
      <InputField label="Street" />
      <InputField label="City" />
      <InputField label="State" />
      <InputField label="Zip Code" />
    </fieldset>
  );
}

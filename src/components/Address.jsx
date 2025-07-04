import InputField from "./Field";
import Dropdown from "./Dropdown";
import { states } from "../data/states.js";

export default function Address({ formData, updateField }) {
  return (
    <fieldset className="address">
      <legend>Address</legend>
      <InputField
        type="text"
        label="Street"
        value={formData.street}
        onChange={(value) => updateField("street", value)}
      />
      <InputField
        type="text"
        label="City"
        value={formData.city}
        onChange={(value) => updateField("city", value)}
      />
      <Dropdown
        label="States"
        options={states}
        name="department"
        value={formData.livingState}
        onChange={(val) => updateField("livingState", val)}
      />
      <InputField
        type="number"
        label="Zip Code"
        value={formData.zipCode}
        onChange={(value) => updateField("zipCode", value)}
      />
    </fieldset>
  );
}

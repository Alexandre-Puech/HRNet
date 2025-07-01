import InputField from "./Field";
import Dropdown from "./Dropdown";
import { states } from "../data/states.js";

export default function Address() {
  return (
    <fieldset className="address">
      <legend>Address</legend>
      <InputField label="Street" />
      <InputField label="City" />
      <Dropdown label="State" options={states} />
      <InputField label="Zip Code" />
    </fieldset>
  );
}

import InputField from "./Field";
import Dropdown from "./Dropdown";
import { states } from "../data/states.js";

export default function Address() {
  return (
    <fieldset className="address">
      <legend>Address</legend>
      <InputField type="text" label="Street" />
      <InputField type="text" label="City" />
      <Dropdown label="State" options={states} />
      <InputField type="number" label="Zip Code" />
    </fieldset>
  );
}

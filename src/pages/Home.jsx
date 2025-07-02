import InputField from "../components/Field";
import Header from "../components/Header";
import { Link } from "react-router";
import Address from "../components/Address";
import Dropdown from "../components/Dropdown";
import { departments } from "../data/departments.js";
import DateField from "../components/DatePicker.jsx";

export default function Home() {
  return (
    <div className="container">
      <Header
        title="HRnet"
        link={<Link to="/employee-list">View Current Employees</Link>}
      />
      <h2 className="home-title">Create Employee</h2>
      <form id="create-employee" action="#">
        <InputField type="text" label="First Name" />
        <InputField type="text" label="Last Name" />
        <DateField label="Date of Birth" />
        <DateField label="Start Date" />
        <Address />
        <Dropdown label="Departments" options={departments} />
      </form>
    </div>
  );
}

import InputField from "../components/Field";
import Header from "../components/Header";
import { Link } from "react-router";
import Address from "../components/Address";

export default function Home() {
  return (
    <div className="container">
      <Header
        title="HRNet"
        link={<Link to="/employee-list">View Current Employees</Link>}
      />
      <h2 className="home-title">Create Employee</h2>
      <form id="create-employee" action="#">
        <InputField label="First Name" />
        <InputField label="Last Name" />
        <InputField label="Date of Birth" />
        <InputField label="Start Date" />
        <Address />
        <InputField label="Department" />
      </form>
    </div>
  );
}

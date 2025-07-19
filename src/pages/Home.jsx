import InputField from "../components/Field";
import Header from "../components/Header";
import { Link } from "react-router";
import Address from "../components/Address";
import Dropdown from "../components/Dropdown";
import { departments } from "../constants/departments.js";
import DateField from "../components/DatePicker.jsx";
import SaveButton from "../components/SaveButton.jsx";
import { useState } from "react";
import { initialFormData } from "../utils/FormData.js";
import Modal from "../components/Modal.jsx";

export default function Home() {
  const [formData, setFormData] = useState(initialFormData);
  const [showModal, setShowModal] = useState(false);

  const updateField = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleConfirm = () => {
    setShowModal(true);
  };

  return (
    <div className="container">
      <Header
        title="HRnet"
        link={<Link to="/employee-list">View Current Employees</Link>}
      />
      <h2 className="home-title">Create Employee</h2>
      <form id="create-employee" action="#">
        <InputField
          type="text"
          label="First Name"
          value={formData.firstName}
          onChange={(value) => updateField("firstName", value)}
        />
        <InputField
          type="text"
          label="Last Name"
          value={formData.lastName}
          onChange={(value) => updateField("lastName", value)}
        />
        <DateField
          label="Date of Birth"
          value={formData.dateOfBirth}
          onChange={(value) => updateField("dateOfBirth", value)}
        />
        <DateField
          label="Start Date"
          value={formData.startDate}
          onChange={(value) => updateField("startDate", value)}
        />
        <Address formData={formData} updateField={updateField} />
        <Dropdown
          label="Department"
          options={departments}
          name="department"
          value={formData.department}
          onChange={(val) => updateField("department", val)}
        />
      </form>
      <SaveButton data={formData} onConfirm={handleConfirm} />
      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        content="Employee Created!"
      />
    </div>
  );
}

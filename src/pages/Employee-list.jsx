import Header from "../components/Header";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";
import Table from "../components/Table";

export default function EmployeeList() {
  const employees = useSelector((state) => state.employee.employees);
  return (
    <>
      <Header title="Current Employees" link="" />
      <Table date={employees} />
      <Footer />
    </>
  );
}

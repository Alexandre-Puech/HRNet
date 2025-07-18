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

// {"employee":{"employees":[{"firstName":"aa","lastName":"aa","dateOfBirth":"07/01/2025","startDate":"07/01/2025","department":"engineering","street":"aaa","city":"aa","livingState":"MH","zipCode":"12"}]}}

import { Link } from "react-router";

export default function Header(title) {
  return (
    <div className="header">
      <h1 className="title">{title}</h1>
      <nav className="currentEmployeesLink">
        <Link to="/employee-list">View Current Employees</Link>
      </nav>
    </div>
  );
}

export default function Header({ title, link }) {
  return (
    <div className="header">
      <h1 className="title">{title}</h1>
      <nav className="currentEmployeesLink">{link}</nav>
    </div>
  );
}

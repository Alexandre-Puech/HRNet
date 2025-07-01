import { Link } from "react-router";

export default function Footer() {
  return (
    <div className="footer">
      <nav className="home-link">
        <Link to="/">Home</Link>
      </nav>
    </div>
  );
}

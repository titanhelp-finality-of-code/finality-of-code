import { Link } from "react-router-dom";
import "./Navbar.css";
export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-title">TitanHelp</div>
      <nav className="navbar-links">
        <Link to="/tickets">All Tickets</Link>
        <Link to="/tickets/new">New Ticket</Link>
        <Link to="/my-tickets">My Tickets</Link>
      </nav>
    </header>
  );
}

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <Link to="/" className="logo">
        <img src="/images/logo.svg" alt="Explore Malaysia logo" />
        <h1>Explore Malaysia</h1>
      </Link>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/packages">Packages</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}
export default Navbar;

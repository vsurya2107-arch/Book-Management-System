import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2> GUVI LIBRARY PROJECT</h2>
      <div>
        <Link to="/">HOME</Link>
        <Link to="/add">ADD BOOK</Link>
        <Link to="/search">SEARCH</Link>
      </div>
    </nav>
  );
}

export default Navbar;
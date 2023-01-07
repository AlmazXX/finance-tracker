import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar navbar-expand-sm navbar-dark bg-primary">
      <div className="container">
        <Link to="/" className="navbar-brand">
          Finance Tracker
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
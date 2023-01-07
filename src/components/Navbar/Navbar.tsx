import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar navbar-expand-sm navbar-dark bg-primary">
      <div className="container">
        <Link to="/" className="navbar-brand">
          Finance Tracker
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink to="/categories" className="nav-link">Categories</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/create-transaction" className="nav-link">Add transaction</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/create-category" className="nav-link">Add category</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
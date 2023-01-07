import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar navbar-expand-sm navbar-dark bg-primary">
      <div className="container justify-content-start">
        <Link to="/" className="navbar-brand">
          Finance Tracker
        </Link>
        <div className="d-flex flex-column flex-sm-row justify-content-between w-100">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink to="/categories" className="nav-link">
                Categories
              </NavLink>
            </li>
          </ul>
          <Link
            to="/create-transaction"
            className="btn btn-outline-light shadow-lg"
            style={{ width: "180px" }}
          >
            Add new transaction
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
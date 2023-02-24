import { Link, NavLink } from "react-router-dom";
import { clientUrl } from "../../constants";

const Navbar = () => {
  return (
    <div className="navbar navbar-expand-sm navbar-dark bg-primary">
      <div className="container">
        <Link to={clientUrl} className="navbar-brand">
          Finance Tracker
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink to={clientUrl + "/categories"} className="nav-link">
                Categories
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to={clientUrl + "/create-transaction"}
                className="nav-link"
              >
                Add transaction
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={clientUrl + "/create-category"} className="nav-link">
                Add category
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
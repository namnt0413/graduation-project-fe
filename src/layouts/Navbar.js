import { Link, useNavigate } from "react-router-dom";
import AuthUser from "../components/AuthUser";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const { getToken } = AuthUser();
  const { token, http } = AuthUser();
  const logoutUser = () => {
    if (token !== undefined) {
      http.post("/logout").then((res) => {
        console.log(res.data);
      });
      sessionStorage.clear();
      navigate("/");
    }
  };

  return (
    <>
      {!getToken() ? (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/register">
                Register
              </Link>
            </li>
          </ul>
        </nav>
      ) : (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/user">
                User
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cv">
                CV
              </Link>
            </li>
            <li className="nav-item">
              <span role="button" className="nav-link" onClick={logoutUser}>
                Logout
              </span>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
};

export default Navbar;

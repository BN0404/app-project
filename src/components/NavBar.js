import { Link } from "react-router-dom";
import { logOut } from "../utilities/users-service";

function NavBar({ user, setUser }) {
  const handleLogOut = () => {
    logOut();
    setUser(null);
  };
  return (
    <nav>
      <Link to="/speciality">Specialist</Link>
      &nbsp; | &nbsp;
      <Link to="/doctor">Doctor</Link> <span>Welcome, {user.name}</span>{" "}
      <Link to="" onClick={handleLogOut}>
        Logout
      </Link> 
    </nav>
  );
}

export default NavBar;

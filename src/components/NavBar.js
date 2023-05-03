import { Link } from "react-router-dom";
import { logOut } from "../utilities/users-service";
import {AppBar, Toolbar, styled} from '@mui/material'

const Header = styled(AppBar)`
background: blue
`




function NavBar({ user, setUser }) {
  const handleLogOut = () => {
    logOut();
    setUser(null);
  };
  return (
    <Header>
      <Toolbar>
      <Link to="/speciality">Specialist</Link>
      &nbsp; | &nbsp;
      <Link to="/doctor">Doctor</Link> <span>Welcome, {user.name}</span>{" "}
      <Link to="" onClick={handleLogOut}>
        Logout
        </Link> 
        </Toolbar>
    </Header>
  );
}

export default NavBar;

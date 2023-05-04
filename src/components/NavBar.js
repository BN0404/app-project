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
      <Link style={{color:"white"}} to="/speciality">Specialist</Link>
      &nbsp; | &nbsp; 
        <Link style={{ color: "white" }} to="/all">Doctor</Link>
        &nbsp; | &nbsp;
        <span>Welcome, {user.name}</span>{" "}
        &nbsp; | &nbsp;
      <Link style={{color:"white"}} to="" onClick={handleLogOut}>
        Logout
        </Link> 
        </Toolbar>
    </Header>
  );
}

export default NavBar;

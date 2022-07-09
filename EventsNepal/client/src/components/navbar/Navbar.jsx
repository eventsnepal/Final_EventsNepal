import "./navbar.css";
import {Link} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {

  const { user } = useContext(AuthContext);

  return (
    <div className="navbar">
        <div className="navContainer">
          <Link to="/" style={{color:"inherit", textDecoration:"none"}}>
            <span className="logo">EventsNepal</span>
          </Link>
            <div className="navItems">
            {user ? user.username : (
              <>
            <Link to='/register'> <button className="navButton">Register</button></Link>
            <Link to='/login'> <button className="navButton">LogIN</button></Link>
            </>
            )}
            {user && <Link to='/login'> <button className="navButton">Logout</button></Link>}
            </div>
        </div>
    </div>
  )
}

export default Navbar


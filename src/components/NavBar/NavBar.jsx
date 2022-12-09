import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import './NavBar.css'

export default function NavBar({ user, setUser }) {

  function handleLogOut() {
    // Remove token using the user service
    userService.logOut();
    // Update user state in App
    setUser(null);
    console.log("logout clicked")
  }

  return (
    <nav className='navbar'>
      <span>Welcome, {user.name} </span>
      <Link className="link" to="/movies">MyMovies</Link>
      &nbsp;&nbsp;
      <Link className="link"  to="/search/movies">Search Movies</Link>
      &nbsp;&nbsp;    
      <Link className="link"  to="/">MyHome</Link>
      &nbsp;&nbsp;
      
      <Link className="link"  to="" onClick={handleLogOut}>Log Out</Link>
    </nav>
  );
}
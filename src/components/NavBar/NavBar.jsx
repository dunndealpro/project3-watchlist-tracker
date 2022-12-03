import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

export default function NavBar({ user, setUser }) {

  function handleLogOut() {
    // Remove token using the user service
    userService.logOut();
    // Update user state in App
    setUser(null);
    console.log("logout clicked")
  }

  return (
    <nav>
      <Link to="/movies">MyMovies</Link>
      &nbsp; | &nbsp;
      <Link to="/shows">MyShows</Link>
      &nbsp; | &nbsp;
      <Link to="/actors">MyActors</Link>
      &nbsp; | &nbsp;
      <Link to="/watch">MyWatch</Link>
      &nbsp; | &nbsp;
      <Link to="/">MyHome</Link>
      &nbsp; | &nbsp;
      <span>Welcome, {user.name} </span>
      &nbsp;&nbsp;
      <Link to="" onClick={handleLogOut}>Log Out</Link>
    </nav>
  );
}
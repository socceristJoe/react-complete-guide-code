import { Link } from "react-router-dom";
import classes from "./MainNavi.module.css";

function MainNavi() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetup</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/newmeetup">Add New Meetup</Link>
          </li>
          <li>
            <Link to="/favorite">My Favorites</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavi;

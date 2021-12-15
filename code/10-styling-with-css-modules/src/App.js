import { Route, Switch } from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetup";
import FavoritesPage from "./pages/Favorites";
import MainNavi from "./component/layout/MainNavi";

function App() {
  return (
    <div>
      <MainNavi />
      <Switch>
        <Route path="/" exact>
          <AllMeetupsPage />
        </Route>
        <Route path="/newmeetup">
          <NewMeetupPage />
        </Route>
        <Route path="/favorite">
          <FavoritesPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

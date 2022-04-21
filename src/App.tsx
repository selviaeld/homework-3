import "./App.css";
import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Auth from "./Pages/Auth"
import Landing from "./Pages/Landing";
import { useAppSelector, useAppDispatch } from "./Redux/hooks";
import { getTokenFromUrl } from "./Utils/Services";
import { getToken } from "./Redux/tokenSlice";

function App() {
  const Token = useAppSelector(state => state.token.token);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (window.location.hash) {
      const token = getTokenFromUrl(window.location.hash);
      dispatch(getToken(token.access_token));
    }
  }, [dispatch]);

  console.log(Token);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/create-playlist">
            {Token !== "" ? <Auth /> : <Redirect to="/" />}
            {/*<Auth />*/}
          </Route>
          <Route path="/recomend">
            {Token !== "" ? <Auth /> : <Redirect to="/" />}
            {/*<Auth />*/}
          </Route>
          <Route path="/liked-songs">
            {Token !== "" ? <Auth /> : <Redirect to="/" />}
          </Route>
          <Route path="/">
            {Token !== "" ? <Redirect to="/create-playlist" /> : <Landing />}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

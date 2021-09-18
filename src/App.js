import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Movies from "./components/movies.component";
import Navbar from "./common/navbar.component";
import Login from "./components/login.component";
import { Route, Switch } from "react-router-dom";


function App() {
  return(
    <>
  <Navbar />
  <Switch>
    <Route path="/login" component={Login} />
    <Route path="/movies" component={Movies} />
    <Route exact path="/" component={Movies} />
  </Switch>
  </>
  ); 
}

export default App;

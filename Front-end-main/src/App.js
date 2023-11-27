import TopBar from "./components/topbar/TopBar";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Home from "./pages/home/Home";
import Settings from "./pages/settings/Settings";
import Test from "./pages/test/Test";
import About from "./pages/about/About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    
    <Router>
      
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/login"><Login />
        </Route>
        <Route path="/settings"><Settings />
        </Route>
        <Route path="/test"><Test />
        </Route>
        <Route path="/about"><About />
        </Route>

        
      </Switch>
    </Router>
  );
}

export default App;

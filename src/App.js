import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
import NavbarComponent from './components/NavbarComponent'
import BreakfastMenu from './components/BreakfastMenu'
import LunchMenu from './components/Lunchmenu'
import DinnerMenu from './components/DinnerMenu'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <NavbarComponent/>
      <Router>
       <Route exact path="/" render={(props) => <Home routerProps={props}/>} />
       <Route exact path="/breakfast" render={() => <BreakfastMenu/>} />
       <Route exact path="/lunch" render={() => <LunchMenu/>} />
       <Route exact path="/dinner" render={() => <DinnerMenu/>} />
      </Router>

    </div>
  );
}

export default App;

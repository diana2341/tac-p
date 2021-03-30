import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
import NavbarComponent from './components/NavbarComponent'
import Footer from './components/Footer'

import Menu from './components/Menu'
import About from './components/About'
import Contact from './components/ContactUs'



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
          <Route exact path="/:name" render={(props) => <Menu routerProps={props}/>} />
          <Route exact path="/home/about-us" render={(props) => <About/>} />
          <Route exact path="/home/contact-us" render={(props) => <Contact/>} />
        </Router>
      {/* <br/><br/> */}
      <Footer/>

    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
import NavbarComponent from './components/NavbarComponent'


function App() {
  return (
    <div className="App">
      <NavbarComponent/>
      <Home/>
    </div>
  );
}

export default App;

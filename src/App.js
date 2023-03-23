
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
// import Loginform from './components/Loginform';
// import { BrowserRouter as Router, Route, Link, BrowserRouter } from "react-router-dom";

function App() {
  return ( 
    <>
      <Navbar/>
      {/* <Loginform /> */}
      <Home />
    </>
    
  );
}

export default App;

import './App.css';
import {Link, Routes, Route, Naviagte} from "react-router-dom";
import logo from "./wvrpetch.png";

function App() {
  return (
    <div className="App">
      <div>
        <img src={logo} alt="Logo"/>
      </div>
      <div className="Links">
        <Link to="/">Home</Link>&nbsp;&nbsp;
        <Link to="/">About</Link>&nbsp;&nbsp;
        <Link to="/">Merch</Link>&nbsp;&nbsp;
        <Link to="/">Watch</Link>&nbsp;&nbsp;
        <Link to="/">Social</Link>
      </div>
    </div>
  );
}

export default App;

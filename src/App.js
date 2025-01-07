import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Formm from "./pages/Formm";
import Login from "./pages/Login";


function App() {

  return (
    <BrowserRouter>
    <>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/About">About</Link></li>
        <li><Link to="/Form">Form</Link></li>
        <li><Link to="/Login">Login</Link></li>
        <li><Link to="/Signup">Signup</Link></li>
      </ul>
    </nav>
    <Routes>
      <Route path="/" element={App}/>
      <Route path="/Form" element={<Formm/>}/>
      <Route path="/Login" element={<Login/>}/>
    </Routes>
    </>
    </BrowserRouter>
  );
}

export default App;

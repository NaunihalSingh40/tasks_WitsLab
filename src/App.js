import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Formm from "./pages/Formm";
import Login from "./pages/Login";
import { Navbar } from "./components/Navbar/Navbar";
import { About } from "./views/About/About";


function App() {

  return (
    <BrowserRouter>
    <>
    <Navbar/>
    <Routes>
      <Route path="/About" element={<About/>}/>
      <Route path="/Form" element={<Formm/>}/>
      <Route path="/Login" element={<Login/>}/>
    </Routes>
    </>
    </BrowserRouter>
  );
}

export default App;

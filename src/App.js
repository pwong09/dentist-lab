import React from "react";
import './App.css';
import Home from "./Home.js";
import Procedures from "./Procedures.js";
import Contact from "./Contact.js";
import {Route, Routes, Link, Navigate} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/procedures">Our Procedures</Link>
        <Link to="/contact-us">Contact Us</Link>
      </nav>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/procedures" element={<Procedures />} />
          <Route path="/contact-us" element={<Contact />}/>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

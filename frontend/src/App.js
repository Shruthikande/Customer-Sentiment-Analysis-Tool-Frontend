// import logo from './logo.svg';
import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Component/Home'; // Example page
import Nav from './Component/Nav';
import Footer from './Component/Footer';
import Signup from './Component/Signup';
import Login from './Component/Login';
import Logout from './Component/Logout';
import About from './Component/About';

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home/>} />      {/* Home page */}
          <Route path="/about" element={<About />} />{/* About page */}
          <Route path="/Login" element={<Login />} />{/* About page */}
          <Route path="/logout" element={<Logout />} />{/* About page */}
          <Route path="/signup" element={<Signup />} /> {/* Browse component */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

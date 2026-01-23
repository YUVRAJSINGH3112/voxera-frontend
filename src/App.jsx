import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Docs from './components/Docs';
import About from './components/About';
import './style/css/App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} /> 
        <Route path="/docs" element={<Docs />} /> 
        <Route path="/about" element={<About />} /> 
        <Route path="/demo" element={<Signup />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
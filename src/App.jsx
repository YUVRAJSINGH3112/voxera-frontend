import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';
import Dashboard from './components/Dashboard'; // Perfect import
import './style/css/App.css';

function App() {
  return (
    <div className="app">
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} /> {/* Tadga Dashboard Route */}
        <Route path="/demo" element={<Signup />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
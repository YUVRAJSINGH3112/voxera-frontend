import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AudioLines } from 'lucide-react';
import '../style/css/Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="container navbar-container">
                <Link to="/" className="logo">
                    <span className="logo-icon"><AudioLines size={20} /></span> VoiceAI
                </Link>

                <div className={`nav-links ${isOpen ? 'active' : ''}`}>
                    <a href="/#features">Features</a>
                    <a href="/#solutions">Solutions</a>
                    <a href="/#pricing">Pricing</a>
                    <a href="/#about">About</a>
                </div>

                <div className="nav-actions">
                    <Link to="/login" className="btn-text">Log In</Link>
                    <Link to="/signup" className="btn-primary">Get Demo</Link>
                </div>

                <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;

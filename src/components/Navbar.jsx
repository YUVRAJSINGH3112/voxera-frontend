import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AudioLines } from 'lucide-react';
import '../style/css/Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
            <div className="container navbar-container">
                <Link to="/" className="logo">
                    <span className="logo-icon"><AudioLines size={20} /></span> Voxera
                </Link>

                <div className={`nav-links ${isOpen ? 'active' : ''}`}>
                    <a href="/#features">Features</a>
                    <Link to="/docs" >Docs</Link>
                    <a href="/#pricing">Pricing</a>
                    <Link to="/about">About</Link>
                </div>

                <div className="nav-actions">
                    <Link to="/login" className="btn-text">Log In</Link>
                    <Link to="/signup" className="btn-primary-nav">Sign Up</Link>
                </div>

                <button className={`mobile-menu-btn ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(!isOpen)}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
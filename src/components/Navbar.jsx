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
                    <Link to="/dashboard" className="btn-primary-nav">Dashboard</Link>
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
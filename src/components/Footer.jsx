import React from 'react';
import '../style/css/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <a href="#" className="logo">
                            <span className="logo-icon">V</span> VoiceAI
                        </a>
                        <p>Empowering businesses with the next generation of conversational AI.</p>
                    </div>

                    <div className="footer-col">
                        <h4>Product</h4>
                        <ul>
                            <li><a href="#">Features</a></li>
                            <li><a href="#">Integrations</a></li>
                            <li><a href="#">Pricing</a></li>
                            <li><a href="#">Security</a></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4>Company</h4>
                        <ul>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4>Connect</h4>
                        <ul>
                            <li><a href="#">Twitter</a></li>
                            <li><a href="#">LinkedIn</a></li>
                            <li><a href="#">Discord</a></li>
                            <li><a href="#">GitHub</a></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; 2026 VoiceAI Inc. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

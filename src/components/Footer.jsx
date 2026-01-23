import React from 'react';
import { motion } from 'framer-motion';
import { AudioLines, Twitter, Linkedin, Github, Disc } from 'lucide-react';
import '../style/css/Footer.css';

const Footer = () => {
    const footerLinks = {
        product: ["Features", "Integrations", "Pricing", "Security"],
        company: [
             { label: "About", link: "/about" },
             { label: "Careers", link: "/careers" },
             { label: "Blog", link: "/blog" },
             { label: "Contact", link: "/contact" }
                 ],
        connect: [
            { name: "Twitter", icon: <Twitter size={16} /> },
            { name: "LinkedIn", icon: <Linkedin size={16} /> },
            { name: "Discord", icon: <Disc size={16} /> },
            { name: "GitHub", icon: <Github size={16} /> }
        ]
    };

    return (
        <footer className="footer">
            <div className="footer-glass-overlay"></div>
            <div className="container">
                <div className="footer-grid">
                    <motion.div 
                        className="footer-brand"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <a href="/" className="logo">
                            <span className="logo-icon"><AudioLines size={20} /></span> Voxera
                        </a>
                        <p>Empowering businesses with the next generation of conversational AI agents.</p>
                        <div className="social-links">
                            {footerLinks.connect.map((social, i) => (
                                <motion.a 
                                    key={i} 
                                    href="#" 
                                    whileHover={{ y: -5, color: '#00d4ff' }}
                                    className="social-icon"
                                >
                                    {social.icon}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    <div className="footer-col">
                        <h4>Product</h4>
                        <ul>
                            {footerLinks.product.map((item, i) => (
                                <li key={i}><motion.a href="#" whileHover={{ x: 5 }}>{item}</motion.a></li>
                            ))}
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4>Company</h4>
                        <ul>
                            {footerLinks.company.map((item, i) => (
                                <li key={i}>
                                    <motion.a
                                        href={item.link}
                                        whileHover={{ x: 5 }}
                                    >
                                        {item.label}
                                     </motion.a>
                                 </li>
                            ))}

                        </ul>
                    </div>

                    <div className="footer-newsletter">
                        <h4>Stay Updated</h4>
                        <p>Join our newsletter for the latest AI voice updates.</p>
                        <div className="newsletter-box">
                            <input type="email" placeholder="Enter your email" />
                            <button>Join</button>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; 2026 Voxera Inc. Built with ❤️ for the future.</p>
                    <div className="footer-legal">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
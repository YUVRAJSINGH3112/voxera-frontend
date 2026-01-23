import React from 'react';
import { motion } from 'framer-motion';
import '../style/css/CTA.css';

const CTA = () => {
    return (
        <section className="section cta-section">
            <div className="container">
                <motion.div 
                    className="cta-card"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="cta-glow"></div>
                    <h2>Ready to Upgrade Your Support?</h2>
                    <p>Be among the first to deliver exceptional AI-powered voice experiences.</p>
                    <motion.button 
                        className="btn-white"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Get Started Now
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
};

export default CTA;
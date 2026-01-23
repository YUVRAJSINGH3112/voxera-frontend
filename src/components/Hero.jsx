import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import '../style/css/Hero.css';

const Hero = () => {
    // --- EXISTING: Mouse Tracking Logic ---
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 25, stiffness: 150 };
    const dx = useSpring(mouseX, springConfig);
    const dy = useSpring(mouseY, springConfig);

    useEffect(() => {
        const handleMouseMove = (e) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY]);

    // --- EXISTING: Animation Variants ---
    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    return (
        <section className="hero">
            {/* --- Interactive Spotlight Glow --- */}
            <motion.div 
                className="mouse-glow"
                style={{
                    left: dx,
                    top: dy,
                }}
            />

            {/* --- Purple Smoke Layers --- */}
            <div className="smoke-container">
                <div className="smoke smoke-1"></div>
                <div className="smoke smoke-2"></div>
                <div className="smoke smoke-3"></div>
            </div>

            <div className="container hero-container">
                {/* Left Content with Staggered Animation */}
                <motion.div 
                    className="hero-content"
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.h1 variants={fadeInUp}>
                    AI voice & chat layer <br />
                        for <span className="text-gradient"> modern businesses.</span>
                    </motion.h1>

                    <motion.p className="hero-subtitle" variants={fadeInUp}>
                        Deploy AI voice agents that understand emotion, context, and intent.
                        Reduce wait times by 90% and increase customer satisfaction instantly.
                    </motion.p>

                    <motion.div className="hero-actions" variants={fadeInUp}>
                        <motion.a 
                            href="#trial" 
                            className="btn-primary-lg"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Start Free Trial <span className="arrow">→</span>
                        </motion.a>
                        
                        <motion.button 
                            className="btn-secondary-lg"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <span className="play-icon">▶</span> Listen to Demo
                        </motion.button>
                    </motion.div>
                </motion.div>

                {/* Right Visual */}
                <motion.div 
                    className="hero-visual"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    <motion.div 
                        className="voice-visualization"
                        animate={{ 
                            y: [0, -20, 0],
                        }}
                        transition={{ 
                            duration: 4, 
                            repeat: Infinity, 
                            ease: "easeInOut" 
                        }}
                    >
                        <div className="wave-container">
                            {[...Array(12)].map((_, i) => (
                                <motion.div 
                                    key={i} 
                                    className="wave-bar" 
                                    style={{ animationDelay: `${i * 0.1}s` }}
                                    animate={{ 
                                        height: ["20px", "60px", "20px"]
                                    }}
                                    transition={{ 
                                        duration: 1.5, 
                                        repeat: Infinity, 
                                        delay: i * 0.1 
                                    }}
                                ></motion.div>
                            ))}
                        </div>
                        <div className="visual-badge">
                            <motion.span 
                                className="status-dot"
                                animate={{ opacity: [1, 0.4, 1] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                            ></motion.span> 
                            AI-Powered Conversations
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Static/Pulsing Hero Glow */}
            <motion.div 
                className="hero-glow"
                animate={{ 
                    opacity: [0.4, 0.7, 0.4],
                    scale: [1, 1.2, 1]
                }}
                transition={{ duration: 8, repeat: Infinity }}
            ></motion.div>
        </section>
    );
};

export default Hero;
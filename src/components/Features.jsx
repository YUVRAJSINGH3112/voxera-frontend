import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Globe, Zap, Shield, BarChart3, Radio } from 'lucide-react';
import '../style/css/Features.css';

const Features = () => {
    const features = [
        { icon: <Bot size={24} />, title: "Natural Conversations", desc: "Forget robotic scripts. Our AI adapts to tone, accents, and interruptions in real-time." },
        { icon: <Globe size={24} />, title: "100+ Languages", desc: "Serve customers globally in their native language with instant, culturally nuance-aware translation." },
        { icon: <Zap size={24} />, title: "Instant Scale", desc: "Handle 10 calls or 10,000 simultaneously. Never put a customer on hold during peak seasons again." },
        { icon: <Shield size={24} />, title: "Enterprise Security", desc: "Bank-grade encryption and SOC2 compliance ensure your customer data remains secure." },
        { icon: <BarChart3 size={24} />, title: "Real-time Analytics", desc: "Track sentiment, resolution rates, and customer satisfaction instantly with our advanced dashboard." },
        { icon: <Radio size={24} />, title: "Custom Voice Cloning", desc: "Create a unique brand voice that perfectly matches your company identity and values." }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 40, scale: 0.95 },
        visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } }
    };

    return (
        <section className="section features" id="features">
            <div className="container">
                <motion.div 
                    className="section-header text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="section-title text-gradient">Why Choose VoiceAI?</h2>
                    <p className="section-subtitle">Our autonomous agents handle complex conversations naturally, freeing your human team.</p>
                </motion.div>

                <motion.div 
                    className="features-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {features.map((feature, index) => (
                        <motion.div 
                            key={index} 
                            className="feature-card"
                            variants={cardVariants}
                            whileHover={{ 
                                y: -10,
                                boxShadow: "0px 10px 30px rgba(16, 16, 196, 0.51)", // Hover Glow
                                transition: { duration: 0.3 }
                            }}
                        >
                            <motion.div 
                                className="feature-icon"
                                initial={{ scale: 0, rotate: -45 }}
                                whileInView={{ scale: 1, rotate: 0 }}
                                transition={{ delay: index * 0.1 + 0.3, type: "spring", stiffness: 200 }}
                            >
                                {feature.icon}
                            </motion.div>
                            <h3>{feature.title}</h3>
                            <p>{feature.desc}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Features;
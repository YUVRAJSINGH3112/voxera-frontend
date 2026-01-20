import React from 'react';
import { Bot, Globe, Zap, Shield, BarChart3, Radio } from 'lucide-react';
import '../style/css/Features.css';

const Features = () => {
    const features = [
        {
            icon: <Bot size={20} />,
            title: "Natural Conversations",
            desc: "Forget robotic scripts. Our AI adapts to tone, accents, and interruptions in real-time."
        },
        {
            icon: <Globe size={20} />,
            title: "100+ Languages",
            desc: "Serve customers globally in their native language with instant, culturally nuance-aware translation."
        },
        {
            icon: <Zap size={20} />,
            title: "Instant Scale",
            desc: "Handle 10 calls or 10,000 simultaneously. Never put a customer on hold during peak seasons again."
        },
        {
            icon: <Shield size={20} />,
            title: "Enterprise Security",
            desc: "Bank-grade encryption and SOC2 compliance ensure your customer data remains completely secure."
        },
        {
            icon: <BarChart3 size={20} />,
            title: "Real-time Analytics",
            desc: "Track sentiment, resolution rates, and customer satisfaction instantly with our advanced dashboard."
        },
        {
            icon: <Radio size={20} />,
            title: "Custom Voice Cloning",
            desc: "Create a unique brand voice that perfectly matches your company identity and values."
        }
    ];

    return (
        <section className="section features" id="features">
            <div className="container">
                <div className="section-header text-center">
                    <h2 className="section-title">Why Choose VoiceAI?</h2>
                    <p className="section-subtitle">
                        Our autonomous agents handle complex conversations naturally, freeing your human team.
                    </p>
                </div>

                <div className="features-grid">
                    {features.map((feature, index) => (
                        <div key={index} className="feature-card">
                            <div className="feature-icon">{feature.icon}</div>
                            <h3>{feature.title}</h3>
                            <p>{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;

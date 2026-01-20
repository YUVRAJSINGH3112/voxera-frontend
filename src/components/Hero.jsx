import React from 'react';
import '../style/css/Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="container hero-container">
                <div className="hero-content">
                    <h1>
                        Humanize Support <br />
                        with <span className="text-gradient">Intelligent Voice</span>
                    </h1>
                    <p className="hero-subtitle">
                        Deploy AI voice agents that understand emotion, context, and intent.
                        Reduce wait times by 90% and increase customer satisfaction instantly.
                    </p>

                    <div className="hero-actions">
                        <a href="#trial" className="btn-primary-lg">
                            Start Free Trial <span className="arrow">→</span>
                        </a>
                        <button className="btn-secondary-lg">
                            <span className="play-icon">▶</span> Listen to Demo
                        </button>
                    </div>
                </div>

                <div className="hero-visual">
                    <div className="voice-visualization">
                        <div className="wave-container">
                            {[...Array(12)].map((_, i) => (
                                <div key={i} className="wave-bar" style={{ animationDelay: `${i * 0.1}s` }}></div>
                            ))}
                        </div>
                        <div className="visual-badge">
                            <span className="status-dot"></span> AI Voice Visualization
                        </div>
                    </div>
                </div>
            </div>

            <div className="hero-glow"></div>
        </section>
    );
};

export default Hero;

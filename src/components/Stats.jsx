import React from 'react';
import '../style/css/Stats.css';

const Stats = () => {
    const stats = [
        { value: "24/7", label: "Availability" },
        { value: "30%", label: "Cost Reduction" },
        { value: "4.8/5", label: "CSAT Score" }
    ];

    return (
        <section className="section stats-section">
            <div className="container">
                <div className="stats-grid">
                    {stats.map((stat, index) => (
                        <div key={index} className="stat-item">
                            <div className="stat-value text-gradient">{stat.value}</div>
                            <div className="stat-label">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;

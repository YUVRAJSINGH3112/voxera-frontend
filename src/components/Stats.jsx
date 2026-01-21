import React, { useEffect } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import '../style/css/Stats.css';

const StatCounter = ({ value, label }) => {
    // threshold 0.3 matlab jab 30% dikhega tab start hoga
    const { ref, inView } = useInView({ threshold: 0.3 });
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => {
        return value.includes('.') ? latest.toFixed(1) : Math.round(latest);
    });

    useEffect(() => {
        if (inView) {
            const numericValue = parseFloat(value.replace(/[^0-9.]/g, ''));
            const controls = animate(count, numericValue, { 
                duration: 2, 
                ease: "easeOut" 
            });
            return controls.stop;
        } else {
            // Screen se bahar jaate hi wapas 0 par set kar do
            count.set(0);
        }
    }, [inView, value, count]);

    return (
        <motion.div 
            ref={ref}
            className="stat-item-shiny"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        >
            <div className="stat-glow-effect"></div>
            <div className="stat-value-container">
                <motion.span className="text-gradient-shiny">{rounded}</motion.span>
                <span className="stat-suffix">{value.replace(/[0-9.]/g, '')}</span>
            </div>
            <div className="stat-label-shiny">{label}</div>
        </motion.div>
    );
};

const Stats = () => {
    const stats = [
        { value: "24/7", label: "Availability" },
        { value: "30%", label: "Cost Reduction" },
        { value: "4.8/5", label: "CSAT Score" }
    ];

    return (
        <section className="section stats-section-refined">
            <div className="container">
                <div className="stats-grid-refined">
                    {stats.map((stat, index) => (
                        <StatCounter key={index} value={stat.value} label={stat.label} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
import React, { useEffect } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import '../style/css/Stats.css';

const StatCounter = ({ value, label }) => {
  const { ref, inView } = useInView({ threshold: 0.3 });
  const count = useMotionValue(0);

  // 🔹 numeric + suffix split
  const match = value.match(/^([\d.]+)(.*)$/);
  const numberPart = match ? match[1] : "0";
  const suffixPart = match ? match[2] : "";

  const rounded = useTransform(count, (latest) =>
    numberPart.includes('.') ? latest.toFixed(1) : Math.round(latest)
  );

  useEffect(() => {
    if (inView) {
      const controls = animate(count, parseFloat(numberPart), {
        duration: 2,
        ease: "easeOut",
      });
      return controls.stop;
    } else {
      count.set(0);
    }
  }, [inView, numberPart, count]);

  return (
    <motion.div
      ref={ref}
      className="stat-item-shiny"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="stat-glow-effect"></div>

      <div className="stat-value-container ltr-text">
        <motion.span className="text-gradient-shiny">
          {rounded}
        </motion.span>
        <span className="stat-suffix">{suffixPart}</span>
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
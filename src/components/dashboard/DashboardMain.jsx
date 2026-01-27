import React from 'react';
import { motion } from 'framer-motion';
import { 
    LayoutDashboard, 
    Mic2, 
    Users, 
    Settings, 
    BarChart3, 
    Bell, 
    Search,
    TrendingUp,
    Activity
} from 'lucide-react';
import '../../style/css/DashboardMain.css';

const DashboardMain = () => {
    const stats = [
        { label: "Total Minutes", value: "12,840", grow: "+12%", icon: <Mic2 size={20} /> },
        { label: "Active Agents", value: "84", grow: "+5%", icon: <Activity size={20} /> },
        { label: "Cost Saved", value: "$4,200", grow: "+22%", icon: <TrendingUp size={20} /> },
        { label: "Avg. Sentiment", value: "94%", grow: "+2%", icon: <Users size={20} /> }
    ];

    return (
        <div className="dashboard-container">
            {/* Sidebar Animation */}
            <motion.aside 
                className="sidebar"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
            >
                <div className="sidebar-logo">
                    <div className="logo-box">V</div>
                    <span>VoiceAI</span>
                </div>
                <nav className="sidebar-nav">
                    <a href="#" className="nav-item active"><LayoutDashboard size={20} /> Overview</a>
                    <a href="#" className="nav-item"><Mic2 size={20} /> Voice Agents</a>
                    <a href="#" className="nav-item"><BarChart3 size={20} /> Analytics</a>
                    <a href="#" className="nav-item"><Users size={20} /> Customers</a>
                    <div className="nav-divider"></div>
                    <a href="#" className="nav-item"><Settings size={20} /> Settings</a>
                </nav>
            </motion.aside>

            {/* Main Content Area */}
            <main className="main-content">
                <header className="dash-header">
                    <div className="search-bar">
                        <Search size={18} />
                        <input type="text" placeholder="Search analytics..." />
                    </div>
                    <div className="header-actions">
                        <div className="notification-bell">
                            <Bell size={20} />
                            <span className="pulse-dot"></span>
                        </div>
                        <div className="user-profile">
                            <img src="https://ui-avatars.com/api/?name=Admin&background=00d4ff&color=fff" alt="User" />
                        </div>
                    </div>
                </header>

                <div className="dash-body">
                    <motion.h1 
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        Good Morning, <span className="text-gradient">Admin</span>
                    </motion.h1>

                    {/* Stats Grid */}
                    <div className="stats-grid-dash">
                        {stats.map((stat, i) => (
                            <motion.div 
                                key={i}
                                className="stat-card-dash"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.1 }}
                                whileHover={{ y: -5 }}
                            >
                                <div className="stat-card-header">
                                    <div className="stat-icon-wrapper">{stat.icon}</div>
                                    <span className="stat-grow">{stat.grow}</span>
                                </div>
                                <div className="stat-card-body">
                                    <h3>{stat.value}</h3>
                                    <p>{stat.label}</p>
                                </div>
                                <div className="card-progress-bg">
                                    <motion.div 
                                        className="card-progress-fill"
                                        initial={{ width: 0 }}
                                        animate={{ width: "70%" }}
                                        transition={{ duration: 1.5, delay: 0.5 }}
                                    ></motion.div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Simulation: Live Activity Chart Area */}
                    <motion.div 
                        className="live-chart-container"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                    >
                        <div className="chart-header">
                            <h3>Real-time Interaction Volume</h3>
                            <div className="live-badge">
                                <span className="live-dot"></span> LIVE
                            </div>
                        </div>
                        <div className="mock-chart">
                            {[...Array(20)].map((_, i) => (
                                <motion.div 
                                    key={i}
                                    className="chart-bar-dash"
                                    animate={{ 
                                        height: [
                                            Math.random() * 100 + 50, 
                                            Math.random() * 150 + 50, 
                                            Math.random() * 100 + 50
                                        ] 
                                    }}
                                    transition={{ 
                                        duration: 2, 
                                        repeat: Infinity, 
                                        ease: "easeInOut",
                                        delay: i * 0.05 
                                    }}
                                ></motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </main>
        </div>
    );
};

export default DashboardMain;
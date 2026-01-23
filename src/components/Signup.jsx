import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock, Building2, Briefcase, ArrowRight } from 'lucide-react';
import '../style/css/Signup.css';

const Signup = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        businessName: '',
        industry: ''
    });

    const industries = [
        "E-commerce",
        "Healthcare",
        "Finance",
        "Real Estate",
        "Technology",
        "Retail",
        "Other"
    ];

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    return (
        <div className="auth-container">
            <div className="auth-card">
                <div className="auth-header">
                    <h2>Create Account</h2>
                    <p>Get started with your intelligent voice agent today.</p>
                </div>

                <form onSubmit={handleSubmit} className="auth-form">
                    <div className="form-group">
                        <label>Business Name</label>
                        <div className="input-wrapper">
                            <Building2 size={18} className="input-icon" />
                            <input
                                type="text"
                                name="businessName"
                                placeholder="Acme Corp"
                                value={formData.businessName}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Industry</label>
                        <div className="input-wrapper">
                            <Briefcase size={18} className="input-icon" />
                            <select
                                name="industry"
                                value={formData.industry}
                                onChange={handleChange}
                                required
                                className={formData.industry ? "has-value" : ""}
                            >
                                <option value="" disabled hidden>
                                    Select Industry
                                </option>
                                {industries.map(ind => (
                                    <option key={ind} value={ind}>{ind}</option>
                                ))}
                            </select>

                        </div>
                    </div>

                    <div className="form-group">
                        <label>Work Email</label>
                        <div className="input-wrapper">
                            <Mail size={18} className="input-icon" />
                            <input
                                type="email"
                                name="email"
                                placeholder="name@company.com"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <div className="input-wrapper">
                            <Lock size={18} className="input-icon" />
                            <input
                                type="password"
                                name="password"
                                placeholder="••••••••"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    <button type="submit" className="btn-auth-primary">
                        Create Account <ArrowRight size={18} />
                    </button>
                </form>

                <div className="auth-footer">
                    <p>Already have an account? <Link to="/login" className="auth-link">Log In</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Signup;

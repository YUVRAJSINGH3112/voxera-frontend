import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Mail, Lock, Building2, Briefcase, ArrowRight } from 'lucide-react';
import '../style/css/Signup.css';
import { useAuth } from "../AuthContext"

const Signup = () => {
    const navigate = useNavigate();
    const { refreshAuth } = useAuth()

    const [formData, setFormData] = useState({
        email: '',
        password: '',
        name: '',
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);
        try {
            const res = await axios.post(
                "http://localhost:8000/auth/register",
                formData,
                { withCredentials: true } 
            );

            await refreshAuth();

            navigate("/dashboard");

        } catch (error) {
            console.error(error.response?.data || error.message);
            alert(error.response?.data?.message || "Signup failed");
        }
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
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                placeholder='Business Name'
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
                                placeholder='Industry'
                            >
                                <option value="" disabled>Select Industry</option>
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
                                value={formData.email}
                                onChange={handleChange}
                                required
                                placeholder='Work Email'
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
                                value={formData.password}
                                onChange={handleChange}
                                required
                                placeholder='Password'
                            />
                        </div>
                    </div>

                    <button type="submit" className="btn-auth-primary">
                        Create Account <ArrowRight size={18} />
                    </button>
                </form>

                <div className="auth-footer">
                    <p>Already have an account? <Link to="/login">Log In</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Signup;

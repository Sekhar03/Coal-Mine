import React, { useState } from 'react';
import '../App.css';

function Login({ onLogin }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const mockUsers = [
        { username: 'admin', password: 'password', role: 'admin', name: 'System Admin' },
        { username: 'manager', password: 'password', role: 'manager', name: 'Shift Manager John' },
        { username: 'emp1', password: 'password', role: 'employee', name: 'Employee Smith' },
        { username: 'employer', password: 'password', role: 'employer', name: 'Mine HR Employer' },
        { username: 'coordinator', password: 'password', role: 'coordinator', name: 'Staffing Coordinator' },
        { username: 'recruiter', password: 'password', role: 'recruiter', name: 'Field Recruiter' },
        { username: 'candidate', password: 'password', role: 'candidate', name: 'Candidate Alex' }
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = mockUsers.find(u => u.username === username && u.password === password);
        if (user) {
            setError('');
            onLogin(user);
        } else {
            setError('Invalid credentials. Use admin/password, manager/password, or emp1/password.');
        }
    };

    return (
        <div className="login-container">
            <div className="login-card">
                <div className="login-logo">
                    <img src="/OIP (1).jpeg" alt="Logo" onError={(e) => { e.target.src = "https://via.placeholder.com/100?text=Logo"; }} />
                    <h2>CMMS</h2>
                </div>
                <h3 className="login-title">Welcome Back</h3>
                <p className="login-subtitle">Sign in to your account</p>
                
                {error && <div className="login-error">{error}</div>}

                <form className="login-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Username</label>
                        <div className="input-with-icon">
                            <i className="material-icons">person</i>
                            <input 
                                type="text" 
                                value={username} 
                                onChange={(e) => setUsername(e.target.value)} 
                                placeholder="Enter your username" 
                                required 
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <div className="input-with-icon">
                            <i className="material-icons">lock</i>
                            <input 
                                type="password" 
                                value={password} 
                                onChange={(e) => setPassword(e.target.value)} 
                                placeholder="Enter your password" 
                                required 
                            />
                        </div>
                    </div>
                    <button type="submit" className="btn-primary btn-full-width">
                        Sign In
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Login;

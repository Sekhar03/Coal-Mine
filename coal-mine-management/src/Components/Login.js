import React, { useState } from 'react';
import '../App.css';

function Login({ onLogin }) {
    const [username, setUsername] = useState('admin');
    const [password, setPassword] = useState('password');
    const [selectedRole, setSelectedRole] = useState('admin');
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
            setError('Invalid credentials.');
        }
    };

    return (
        <div className="login-container">
            <div className="login-card" style={{ maxWidth: '500px' }}>
                <div className="login-logo">
                    <img src="/OIP (1).jpeg" alt="Logo" onError={(e) => { e.target.src = "https://via.placeholder.com/100?text=Logo"; }} />
                    <h2>CMMS Portal</h2>
                </div>
                <h3 className="login-title">Welcome Back</h3>
                <p className="login-subtitle">Select your demonstration role to sign in</p>
                
                {error && <div className="login-error">{error}</div>}

                <form className="login-form" onSubmit={handleSubmit}>
                    
                    <div className="form-group" style={{ marginBottom: '25px' }}>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', maxHeight: '350px', overflowY: 'auto', padding: '5px' }}>
                            {mockUsers.map(user => (
                                <label key={user.role} style={{ 
                                    padding: '12px 10px', 
                                    background: selectedRole === user.role ? 'rgba(59, 130, 246, 0.2)' : 'rgba(0,0,0,0.2)', 
                                    border: `1px solid ${selectedRole === user.role ? 'var(--secondary-color)' : 'var(--border-color)'}`,
                                    borderRadius: '8px',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '10px',
                                    color: 'var(--text-light)',
                                    fontSize: '0.85rem'
                                }}>
                                    <input 
                                        type="radio" 
                                        name="loginRole" 
                                        value={user.role} 
                                        checked={selectedRole === user.role} 
                                        onChange={() => {
                                            setSelectedRole(user.role);
                                            setUsername(user.username);
                                            setPassword(user.password);
                                        }} 
                                        style={{ margin: 0, cursor: 'pointer' }}
                                    />
                                    <div>
                                        <strong style={{ display: 'block' }}>{user.name}</strong>
                                        <span style={{ color: 'var(--text-muted)', fontSize: '0.75rem' }}>@{user.username}</span>
                                    </div>
                                </label>
                            ))}
                        </div>
                    </div>

                    <button type="submit" className="btn-primary btn-full-width">
                        Secure System Login
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Login;

import React, { useState } from 'react';
import '../App.css';

function Faults({ faults, onAddFault }) {
    const [faultMsg, setFaultMsg] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(faultMsg.trim()) {
            onAddFault(faultMsg);
            setFaultMsg('');
        }
    };

    return (
        <section id="faults-section" className="component-section">
            <div className="card">
                <h2>Faults Management</h2>
                <div className="card-content form-container">
                    <form onSubmit={handleSubmit} className="margin-bottom-20">
                        <div className="form-row">
                            <label>
                                Report New Fault
                                <input 
                                    type="text" 
                                    value={faultMsg} 
                                    onChange={(e) => setFaultMsg(e.target.value)} 
                                    placeholder="Describe the fault..." 
                                    required 
                                />
                            </label>
                            <button type="submit" className="btn-danger">Report</button>
                        </div>
                    </form>
                    
                    <h3>Recent Faults</h3>
                    {faults.length === 0 ? (
                        <p className="empty-state text-muted">No faults reported. Everything is operational.</p>
                    ) : (
                        <ul className="faults-list">
                            {faults.map(fault => (
                                <li key={fault.id}>
                                    <i className="material-icons fault-icon">error_outline</i>
                                    <div className="log-text">
                                        <p>{fault.message}</p>
                                        <span className="timestamp">{fault.date}</span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </section>
    );
}

export default Faults;

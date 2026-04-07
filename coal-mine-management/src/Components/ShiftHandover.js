import React, { useState } from 'react';
import '../App.css';

function ShiftHandover({ onSubmitHandover, currentUser }) {
    const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
    const [tasks, setTasks] = useState('');
    const [issues, setIssues] = useState('');
    const [critical, setCritical] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmitHandover({
            supervisor: currentUser.name,
            date,
            tasks,
            issues,
            critical
        });
        setTasks('');
        setIssues('');
        setCritical('');
        alert('Digital Shift Handover Log Submitted successfully!');
    };

    return (
        <section id="handover-log-section" className="component-section">
            <div className="card">
                <h2>Create Shift Handover Log</h2>
                <div className="card-content">
                    <form onSubmit={handleSubmit}>
                        <div className="form-row multi-col">
                            <label>
                                Outgoing Supervisor
                                <input type="text" value={currentUser?.name || ''} readOnly style={{ opacity: 0.7, cursor: 'not-allowed' }} />
                            </label>
                            <label>
                                Shift Date
                                <input type="date" value={date} onChange={e => setDate(e.target.value)} required />
                            </label>
                        </div>
                        <div className="form-row">
                            <label>
                                Completed Tasks / Activities
                                <textarea 
                                    rows="3" 
                                    value={tasks} 
                                    onChange={e => setTasks(e.target.value)} 
                                    placeholder="Summarize the activities completed during your shift..."
                                    required
                                    style={{ width: '100%', padding: '12px', background: 'rgba(15, 23, 42, 0.8)', border: '1px solid var(--border-color)', borderRadius: '8px', color: 'var(--text-light)', fontFamily: 'Inter' }}
                                />
                            </label>
                        </div>
                        <div className="form-row">
                            <label>
                                Ongoing/Outstanding Issues
                                <textarea 
                                    rows="3" 
                                    value={issues} 
                                    onChange={e => setIssues(e.target.value)} 
                                    placeholder="List any equipment issues, delays, or tasks to be passed on..."
                                    style={{ width: '100%', padding: '12px', background: 'rgba(15, 23, 42, 0.8)', border: '1px solid var(--border-color)', borderRadius: '8px', color: 'var(--text-light)', fontFamily: 'Inter' }}
                                />
                            </label>
                        </div>
                        <div className="form-row">
                            <label>
                                Critical Incidents & Red Flags
                                <textarea 
                                    rows="3" 
                                    value={critical} 
                                    onChange={e => setCritical(e.target.value)} 
                                    placeholder="Highlight any safety incidents, nearmisses or extreme urgency items..."
                                    style={{ width: '100%', padding: '12px', background: 'rgba(239, 68, 68, 0.05)', border: '1px solid var(--danger-color)', borderRadius: '8px', color: 'var(--text-light)', fontFamily: 'Inter' }}
                                />
                            </label>
                        </div>
                        <div className="form-actions">
                            <button type="submit" className="btn-primary">Submit Handover Log</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default ShiftHandover;

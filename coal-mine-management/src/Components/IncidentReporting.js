import React, { useState } from 'react';
import '../App.css';

function IncidentReporting({ onReportIncident, currentUser }) {
    const [date, setDate] = useState('');
    const [location, setLocation] = useState('');
    const [description, setDescription] = useState('');
    const [involved, setInvolved] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onReportIncident({
            reporter: currentUser.name,
            date,
            location,
            description,
            involved
        });
        setDate('');
        setLocation('');
        setDescription('');
        setInvolved('');
        alert('Incident reported successfully!');
    };

    return (
        <section id="incident-reporting-section" className="component-section">
            <div className="card" style={{ borderColor: 'var(--danger-color)' }}>
                <h2 style={{ color: 'var(--danger-color)' }}>Report Safety Incident / Near-Miss</h2>
                <div className="card-content">
                    <form onSubmit={handleSubmit}>
                        <div className="form-row multi-col">
                            <label>
                                Date of Incident
                                <input type="date" value={date} onChange={e => setDate(e.target.value)} required />
                            </label>
                            <label>
                                Location
                                <input type="text" value={location} onChange={e => setLocation(e.target.value)} required placeholder="Where did this occur?" />
                            </label>
                        </div>
                        <div className="form-row">
                            <label>
                                People Involved / Witnesses
                                <input type="text" value={involved} onChange={e => setInvolved(e.target.value)} placeholder="Names of those involved" />
                            </label>
                        </div>
                        <div className="form-row">
                            <label>
                                Description of Incident
                                <textarea 
                                    rows="4" 
                                    value={description} 
                                    onChange={e => setDescription(e.target.value)} 
                                    required 
                                    placeholder="Describe exactly what happened..."
                                    style={{ width: '100%', padding: '12px', background: 'rgba(15, 23, 42, 0.8)', border: '1px solid var(--border-color)', borderRadius: '8px', color: 'white' }}
                                />
                            </label>
                        </div>
                        <div className="form-actions">
                            <button type="submit" className="btn-danger">Submit Official Report</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default IncidentReporting;

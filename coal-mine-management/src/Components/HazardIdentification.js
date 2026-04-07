import React, { useState } from 'react';
import '../App.css';

function HazardIdentification({ hazards, onAddHazard, currentUser }) {
    const [location, setLocation] = useState('');
    const [description, setDescription] = useState('');
    const [level, setLevel] = useState('Low');
    const [control, setControl] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddHazard({
            reporter: currentUser.name,
            location,
            description,
            level,
            control,
            dateLogged: new Date().toLocaleString()
        });
        setLocation('');
        setDescription('');
        setControl('');
        alert('Hazard logged successfully!');
    };

    const getLevelColor = (lvl) => {
        if (lvl === 'High') return 'var(--danger-color)';
        if (lvl === 'Medium') return 'var(--warning-color)';
        return 'var(--accent-color)';
    };

    return (
        <section id="hazard-id-section" className="component-section">
            <div className="card">
                <h2>Hazard Identification & Control</h2>
                <div className="card-content flex-row">
                    <div className="form-container">
                        <h3>Log New Hazard</h3>
                        <form onSubmit={handleSubmit}>
                            <div className="form-row multi-col">
                                <label>
                                    Location / Zone
                                    <input type="text" value={location} onChange={e => setLocation(e.target.value)} required placeholder="e.g. Sector 7G" />
                                </label>
                                <label>
                                    Risk Level
                                    <select value={level} onChange={e => setLevel(e.target.value)} style={{ padding: '12px', background: 'rgba(15, 23, 42, 0.8)', color: 'white', border: '1px solid var(--border-color)', borderRadius: '8px', marginTop: '8px' }}>
                                        <option>Low</option>
                                        <option>Medium</option>
                                        <option>High</option>
                                    </select>
                                </label>
                            </div>
                            <div className="form-row">
                                <label>
                                    Hazard Description
                                    <textarea rows="2" value={description} onChange={e => setDescription(e.target.value)} required style={{ width: '100%', padding: '12px', background: 'rgba(15, 23, 42, 0.8)', border: '1px solid var(--border-color)', borderRadius: '8px', color: 'white' }} />
                                </label>
                            </div>
                            <div className="form-row">
                                <label>
                                    Proposed Control Measure
                                    <textarea rows="2" value={control} onChange={e => setControl(e.target.value)} required style={{ width: '100%', padding: '12px', background: 'rgba(15, 23, 42, 0.8)', border: '1px solid var(--border-color)', borderRadius: '8px', color: 'white' }} />
                                </label>
                            </div>
                            <button type="submit" className="btn-primary">Log Hazard</button>
                        </form>
                    </div>
                </div>
            </div>

            <div className="card" style={{ marginTop: '30px' }}>
                <h2>Active Hazard Registry</h2>
                <div className="card-content">
                    {hazards.length === 0 ? <p className="empty-state">No hazards documented.</p> : (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                            {hazards.map(h => (
                                <div key={h.id} style={{ background: 'rgba(0,0,0,0.2)', padding: '15px', borderRadius: '10px', borderLeft: `5px solid ${getLevelColor(h.level)}` }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                                        <strong>{h.location}</strong>
                                        <span style={{ color: getLevelColor(h.level), fontWeight: 'bold' }}>{h.level} Risk</span>
                                    </div>
                                    <p style={{ margin: '0 0 10px 0', color: 'var(--text-muted)' }}>{h.description}</p>
                                    <div style={{ background: 'rgba(255,255,255,0.05)', padding: '10px', borderRadius: '6px' }}>
                                        <small style={{ color: 'var(--text-light)' }}><strong>Control:</strong> {h.control}</small>
                                    </div>
                                    <div style={{ marginTop: '10px', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                                        Logged by {h.reporter} on {h.dateLogged}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}

export default HazardIdentification;

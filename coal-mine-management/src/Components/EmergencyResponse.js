import React from 'react';
import '../App.css';

function EmergencyResponse() {
    const handleBroadcast = () => {
        alert("AUTOMATED ALERT INITIATED: All relevant personnel have been notified of emergency evacuation routes.");
    };

    return (
        <section id="emergency-response-section" className="component-section">
            <div className="card">
                <h2>Emergency Response Planning</h2>
                <div className="card-content">
                    <p style={{ color: 'var(--text-muted)', marginBottom: '30px' }}>Digital maps and procedures for emergency evacuation. Ensure familiarity with these routes at all times.</p>
                    
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
                        
                        <div style={{ border: '1px solid var(--border-color)', borderRadius: '12px', overflow: 'hidden' }}>
                            <div style={{ background: 'var(--primary-color)', height: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <i className="material-icons" style={{ fontSize: '4rem', color: 'var(--accent-color)' }}>map</i>
                            </div>
                            <div style={{ padding: '20px', background: 'rgba(0,0,0,0.3)' }}>
                                <h3>Alpha Zone Evacuation</h3>
                                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Primary route through the north-east shaft to assembly point A.</p>
                                <button className="btn-secondary" style={{ width: '100%', marginTop: '10px' }}>View Digital Map</button>
                            </div>
                        </div>

                        <div style={{ border: '1px solid var(--border-color)', borderRadius: '12px', overflow: 'hidden' }}>
                            <div style={{ background: 'var(--primary-color)', height: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <i className="material-icons" style={{ fontSize: '4rem', color: 'var(--warning-color)' }}>health_and_safety</i>
                            </div>
                            <div style={{ padding: '20px', background: 'rgba(0,0,0,0.3)' }}>
                                <h3>First Aid Protocols</h3>
                                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Mandatory protocols and locations for all localized medical hubs.</p>
                                <button className="btn-secondary" style={{ width: '100%', marginTop: '10px' }}>Review Protocols</button>
                            </div>
                        </div>

                    </div>

                    <div style={{ marginTop: '40px', padding: '30px', background: 'rgba(239, 68, 68, 0.1)', border: '2px dashed var(--danger-color)', borderRadius: '12px', textAlign: 'center' }}>
                        <i className="material-icons" style={{ fontSize: '3rem', color: 'var(--danger-color)', marginBottom: '10px' }}>campaign</i>
                        <h3 style={{ color: 'var(--danger-color)', margin: '0 0 10px 0' }}>Automated Emergency Broadcast</h3>
                        <p style={{ color: 'var(--text-light)', marginBottom: '20px' }}>Instantly notify all local supervisors and shift managers to execute evacuation plans.</p>
                        <button onClick={handleBroadcast} className="btn-danger" style={{ padding: '15px 30px', fontSize: '1.2rem', fontWeight: 'bold' }}>INITIATE ALERT</button>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default EmergencyResponse;

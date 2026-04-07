import React from 'react';
import '../App.css';

function ProductivityDashboard({ summaryStats }) {
    return (
        <section id="productivity-section" className="component-section">
            <div className="card">
                <h2>Productivity & Safety Operations Center</h2>
                <div className="card-content">
                    <p style={{ color: 'var(--text-muted)', marginBottom: '30px' }}>
                        Real-time visualization of mine productivity targets, operational efficiency, and critical safety parameters (MoC/DGMS Standards).
                    </p>

                    <div className="dashboard-stats" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginBottom: '30px' }}>
                        
                        {/* Productivity Metrics */}
                        <div className="stat-card" style={{ background: 'rgba(59, 130, 246, 0.1)', border: '1px solid var(--secondary-color)', padding: '25px', borderRadius: '12px', textAlign: 'center' }}>
                            <i className="material-icons" style={{ fontSize: '3rem', color: 'var(--secondary-color)' }}>leaderboard</i>
                            <h3 style={{ margin: '15px 0 5px 0', fontSize: '1.2rem', color: 'var(--text-light)' }}>Coal Production</h3>
                            <p style={{ fontSize: '2rem', fontWeight: 'bold', margin: 0, color: 'var(--secondary-color)' }}>22.4K <span style={{fontSize:'1rem', fontWeight:'normal'}}>Tonnes</span></p>
                            <span style={{ display: 'block', marginTop: '10px', fontSize: '0.85rem', color: 'var(--text-muted)' }}>Daily Target: 25.0K Tonnes</span>
                            <div style={{ width: '100%', background: 'rgba(0,0,0,0.5)', height: '6px', borderRadius: '3px', marginTop: '10px' }}>
                                <div style={{ width: '89%', background: 'var(--secondary-color)', height: '100%' }}></div>
                            </div>
                        </div>

                        {/* Operational Efficiency */}
                        <div className="stat-card" style={{ background: 'rgba(16, 185, 129, 0.1)', border: '1px solid var(--accent-color)', padding: '25px', borderRadius: '12px', textAlign: 'center' }}>
                            <i className="material-icons" style={{ fontSize: '3rem', color: 'var(--accent-color)' }}>precision_manufacturing</i>
                            <h3 style={{ margin: '15px 0 5px 0', fontSize: '1.2rem', color: 'var(--text-light)' }}>Equipment Uptime</h3>
                            <p style={{ fontSize: '2rem', fontWeight: 'bold', margin: 0, color: 'var(--accent-color)' }}>94.2%</p>
                            <span style={{ display: 'block', marginTop: '10px', fontSize: '0.85rem', color: 'var(--text-muted)' }}>Active Faults: {summaryStats?.faults || 0}</span>
                        </div>

                        {/* Safety Metrics */}
                        <div className="stat-card" style={{ background: 'rgba(245, 158, 11, 0.1)', border: '1px solid var(--warning-color)', padding: '25px', borderRadius: '12px', textAlign: 'center' }}>
                            <i className="material-icons" style={{ fontSize: '3rem', color: 'var(--warning-color)' }}>health_and_safety</i>
                            <h3 style={{ margin: '15px 0 5px 0', fontSize: '1.2rem', color: 'var(--text-light)' }}>Safety Health</h3>
                            <p style={{ fontSize: '2rem', fontWeight: 'bold', margin: 0, color: 'var(--warning-color)' }}>120 <span style={{fontSize:'1rem', fontWeight:'normal'}}>Days</span></p>
                            <span style={{ display: 'block', marginTop: '10px', fontSize: '0.85rem', color: 'var(--warning-color)' }}>Without critical DGMS incident</span>
                            <span style={{ display: 'block', marginTop: '5px', fontSize: '0.85rem', color: 'var(--text-muted)' }}>Active Hazards Logged: {summaryStats?.hazards || 0}</span>
                        </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
                        <div style={{ background: 'rgba(0,0,0,0.2)', padding: '20px', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
                            <h4 style={{ margin: '0 0 15px 0', color: 'var(--text-light)' }}><i className="material-icons" style={{verticalAlign:'middle', marginRight:'5px'}}>recent_actors</i> Active Shift Personnel</h4>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', paddingBottom:'10px', borderBottom:'1px solid rgba(255,255,255,0.1)' }}>
                                <span>Underground Operators:</span> <strong>342</strong>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', paddingBottom:'10px', borderBottom:'1px solid rgba(255,255,255,0.1)' }}>
                                <span>Surface Operations:</span> <strong>89</strong>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <span>Supervisors on Duty:</span> <strong>12</strong>
                            </div>
                        </div>

                        <div style={{ background: 'rgba(0,0,0,0.2)', padding: '20px', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
                            <h4 style={{ margin: '0 0 15px 0', color: 'var(--text-light)' }}><i className="material-icons" style={{verticalAlign:'middle', marginRight:'5px'}}>swap_horiz</i> Recent Transitions</h4>
                            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Latest Handover logs submitted:</p>
                            <span style={{ display: 'block', fontSize: '2rem', fontWeight: 'bold', color: 'var(--secondary-color)' }}>{summaryStats?.handovers || 0}</span>
                            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Waiting for next shift review offline via PWA syncing.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProductivityDashboard;

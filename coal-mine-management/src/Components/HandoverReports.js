import React from 'react';
import '../App.css';

function HandoverReports({ handovers }) {
    
    // Simulate downloading PDF by showing an alert
    const handleDownloadPDF = () => {
        alert("Downloading PDF Report... (Simulated)");
    };

    return (
        <section id="handover-reports-section" className="component-section">
            <div className="card">
                <h2>Digital Handover Reports</h2>
                <div className="card-content">
                    {handovers.length === 0 ? (
                        <p className="empty-state">No handover logs generated yet.</p>
                    ) : (
                        <div className="handover-list" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            {handovers.map((log) => (
                                <div key={log.id} style={{ background: 'rgba(0,0,0,0.2)', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '20px' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-color)', paddingBottom: '15px', marginBottom: '15px' }}>
                                        <div>
                                            <h3 style={{ margin: '0 0 5px 0', color: 'var(--secondary-color)' }}>{log.supervisor}</h3>
                                            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Shift logged on: {log.date}</span>
                                        </div>
                                        <button onClick={handleDownloadPDF} className="btn-secondary" style={{ padding: '8px 15px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                            <i className="material-icons" style={{ fontSize: '1rem' }}>picture_as_pdf</i> Export
                                        </button>
                                    </div>
                                    
                                    <div style={{ marginBottom: '15px' }}>
                                        <strong style={{ display: 'block', color: 'var(--text-muted)', marginBottom: '5px' }}>Completed Tasks:</strong>
                                        <p style={{ margin: 0, paddingLeft: '10px', borderLeft: '3px solid var(--accent-color)' }}>{log.tasks || 'None logged.'}</p>
                                    </div>

                                    <div style={{ marginBottom: '15px' }}>
                                        <strong style={{ display: 'block', color: 'var(--text-muted)', marginBottom: '5px' }}>Outstanding Issues:</strong>
                                        <p style={{ margin: 0, paddingLeft: '10px', borderLeft: '3px solid var(--warning-color)' }}>{log.issues || 'None reported.'}</p>
                                    </div>

                                    <div>
                                        <strong style={{ display: 'block', color: 'var(--text-muted)', marginBottom: '5px' }}>Critical Flags:</strong>
                                        <p style={{ margin: 0, paddingLeft: '10px', borderLeft: '3px solid var(--danger-color)', color: log.critical ? 'var(--text-light)' : 'var(--text-muted)' }}>
                                            {log.critical || 'No critical incidents.'}
                                        </p>
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

export default HandoverReports;

import React, { useState, useEffect } from 'react';
import '../App.css';

function ERPSecurity() {
    const [isSyncing, setIsSyncing] = useState(false);
    const [progress, setProgress] = useState(0);

    const handleSync = () => {
        setIsSyncing(true);
        setProgress(0);
    };

    useEffect(() => {
        if (isSyncing) {
            const interval = setInterval(() => {
                setProgress(p => {
                    if (p >= 100) {
                        clearInterval(interval);
                        setIsSyncing(false);
                        return 100;
                    }
                    return p + 10;
                });
            }, 300);
            return () => clearInterval(interval);
        }
    }, [isSyncing]);

    return (
        <section id="erp-security-section" className="component-section">
            <div className="card">
                <h2>ERP Integration & Security Gateway</h2>
                <div className="card-content">
                    <p style={{ color: 'var(--text-muted)', marginBottom: '30px' }}>
                        This module ensures all collected records are AES-256 encrypted and seamlessly synchronized with the central Database and remote Mine ERP system.
                    </p>

                    <div style={{ background: 'rgba(0,0,0,0.3)', padding: '25px', borderRadius: '12px', border: '1px solid var(--border-color)', marginBottom: '30px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                            <div>
                                <h3 style={{ margin: 0, color: 'var(--text-light)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <i className="material-icons" style={{ color: 'var(--accent-color)' }}>lock</i> 
                                    Encrypted Payload Status
                                </h3>
                                <p style={{ margin: '5px 0 0 0', color: 'var(--text-muted)', fontSize: '0.9rem' }}>452 pending shift logs and safety records.</p>
                            </div>
                            <button className="btn-secondary" onClick={handleSync} disabled={isSyncing}>
                                {isSyncing ? 'SYNCING...' : 'FORCE SYNC'}
                            </button>
                        </div>

                        <div style={{ background: 'rgba(255,255,255,0.05)', height: '10px', borderRadius: '5px', overflow: 'hidden' }}>
                            <div style={{ background: 'var(--secondary-color)', width: `${progress}%`, height: '100%', transition: 'width 0.3s ease' }}></div>
                        </div>
                        {progress === 100 && <p style={{ color: 'var(--accent-color)', fontSize: '0.85rem', marginTop: '10px', textAlign: 'right' }}>Sync Successful. SHA-256 Verified.</p>}
                    </div>

                    <div className="dashboard-stats" style={{ gap: '15px' }}>
                        <div className="stat-card" style={{ padding: '20px' }}>
                            <i className="material-icons" style={{ fontSize: '2rem', color: 'var(--accent-color)' }}>verified_user</i>
                            <h4 style={{ margin: '10px 0 5px 0' }}>E2E Encryption</h4>
                            <p style={{ fontSize: '0.8rem' }}>Active</p>
                        </div>
                        <div className="stat-card" style={{ padding: '20px' }}>
                            <i className="material-icons" style={{ fontSize: '2rem', color: 'var(--secondary-color)' }}>integration_instructions</i>
                            <h4 style={{ margin: '10px 0 5px 0' }}>SAP ERP Bridge</h4>
                            <p style={{ fontSize: '0.8rem' }}>Connected</p>
                        </div>
                        <div className="stat-card" style={{ padding: '20px' }}>
                            <i className="material-icons" style={{ fontSize: '2rem', color: 'var(--warning-color)' }}>wifi_off</i>
                            <h4 style={{ margin: '10px 0 5px 0' }}>Local Cache Size</h4>
                            <p style={{ fontSize: '0.8rem' }}>12.4 MB (Offline Mode)</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ERPSecurity;

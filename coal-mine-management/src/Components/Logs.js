import React from 'react';
import '../App.css';

function Logs({ logs }) {
    return (
        <section id="logs-section" className="component-section">
            <div className="card">
                <h2>System Logs</h2>
                <div className="card-content">
                    {logs.length === 0 ? (
                        <p className="empty-state">No system actions have been logged yet.</p>
                    ) : (
                        <ul className="logs-list">
                            {logs.map(log => (
                                <li key={log.id}>
                                    <i className="material-icons log-icon">info</i>
                                    <div className="log-text">
                                        <p>{log.message}</p>
                                        <span className="timestamp">{log.date}</span>
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

export default Logs;

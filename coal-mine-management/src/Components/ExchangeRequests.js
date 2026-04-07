import React from 'react';
import '../App.css';

function ExchangeRequests({ requests, onAction, currentUser }) {
    return (
        <section id="shift-exchange-requests-section" className="component-section">
            <div className="card">
                <h2>Exchange Requests</h2>
                <div className="card-content">
                    {requests.length === 0 ? (
                        <p className="empty-state">No pending requests at this time.</p>
                    ) : (
                        <ul className="request-list">
                            {requests.map((req) => (
                                <li key={req.id} className="request-card">
                                    <div className="request-info">
                                        <p><strong>{req.currentWorker}</strong> wants to swap with <strong>{req.newWorker}</strong></p>
                                        <span className="timestamp">{req.date} at {req.time}</span>
                                    </div>
                                    <div className="request-status">
                                        <span className={`status-badge ${req.status.toLowerCase()}`}>{req.status}</span>
                                        {req.status === 'Pending' && currentUser?.role === 'admin' && (
                                            <div className="action-buttons">
                                                <button className="btn-approve" onClick={() => onAction(req.id, 'Approved')}>Approve</button>
                                                <button className="btn-reject" onClick={() => onAction(req.id, 'Rejected')}>Reject</button>
                                            </div>
                                        )}
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

export default ExchangeRequests;

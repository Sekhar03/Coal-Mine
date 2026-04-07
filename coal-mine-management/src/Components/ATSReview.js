import React from 'react';
import '../App.css';

function ATSReview({ currentUser, applications, onShortlist }) {
    const isRecruiter = currentUser?.role === 'recruiter';
    const isFinalStage = ['employer', 'coordinator'].includes(currentUser?.role);

    return (
        <section id="ats-review-section" className="component-section">
            <div className="card">
                <h2>Applicant Tracking System Review</h2>
                <div className="card-content">
                    {applications.length === 0 ? <p className="empty-state">No applications in this pipeline.</p> : (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                            {applications.map(app => {
                                // Recruiters only see what's pending for them. 
                                // Final Stage roles only see what's shortlisted.
                                if (isRecruiter && app.status !== 'Under Review') return null;
                                if (isFinalStage && app.status !== 'Shortlisted') return null;
                                
                                return (
                                    <div key={app.id} style={{ background: 'rgba(0,0,0,0.3)', padding: '20px', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <h3 style={{ margin: '0 0 10px 0', color: 'var(--accent-color)' }}>Candidate: {app.candidateName}</h3>
                                            <span className="status-badge pending" style={{ height: 'fit-content' }}>{app.status}</span>
                                        </div>
                                        <p style={{ margin: 0, color: 'var(--text-muted)' }}>Applied for Requisition ID: {app.jobId}</p>
                                        
                                        {isRecruiter && app.status === 'Under Review' && (
                                            <div style={{ marginTop: '20px', paddingTop: '15px', borderTop: '1px dashed var(--border-color)' }}>
                                                <p style={{ fontSize: '0.9rem', marginBottom: '15px', color: 'var(--text-light)' }}>Please verify the R2 Checks attached to this posting before deciding.</p>
                                                <button 
                                                    className="btn-approve" 
                                                    style={{ width: '100%' }}
                                                    onClick={() => {
                                                        const pass = window.confirm("Does the candidate pass the R2 Check?");
                                                        if (pass) onShortlist(app.id);
                                                    }}
                                                >
                                                    <i className="material-icons" style={{ verticalAlign: 'middle', fontSize: '1.2rem', marginRight: '5px' }}>verified</i>
                                                    Pass R2 & Push to Final Stage
                                                </button>
                                            </div>
                                        )}
                                        
                                        {isFinalStage && app.status === 'Shortlisted' && (
                                            <div style={{ marginTop: '20px', padding: '15px', background: 'rgba(16, 185, 129, 0.1)', border: '1px solid var(--accent-color)', borderRadius: '8px' }}>
                                                <strong style={{ color: 'var(--accent-color)' }}><i className="material-icons" style={{ verticalAlign: 'middle', fontSize: '1.2rem', marginRight: '5px' }}>gavel</i> Ready for Final Decision</strong>
                                                <p style={{ fontSize: '0.85rem', margin: '5px 0 0 0' }}>This candidate passed the R1 and R2 verification checks from the recruiter pipeline.</p>
                                            </div>
                                        )}
                                    </div>
                                )
                            })}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
export default ATSReview;

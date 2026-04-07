import React, { useState } from 'react';
import '../App.css';

function JobPortal({ currentUser, jobs, onCreateJob, onApproveJob, onApplyJob }) {
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [r1Check, setR1Check] = useState('');
    
    const isEmployer = currentUser?.role === 'employer';
    const isCoordinator = currentUser?.role === 'coordinator';
    const isCandidate = currentUser?.role === 'candidate';

    const handleCreate = (e) => {
        e.preventDefault();
        onCreateJob({ title, desc, r1Check, status: 'Pending Approval' });
        setTitle(''); setDesc(''); setR1Check('');
        alert('Job Post Submitted to Coordinator for Approval.');
    };

    const handleApprove = (id) => {
        const dummyR2 = prompt("Define R2 Check Form requirements for the Recruiter (e.g. 'Must have 5 yrs underground experience'):");
        if (dummyR2) {
            onApproveJob(id, dummyR2);
        }
    };

    const handleApply = (id) => {
        const agreed = window.confirm("Do you agree to the R1 Checks and want to submit your mock-resume?");
        if (agreed) {
            onApplyJob(id, currentUser.name);
            alert("Application Submitted to Recruiter Dashboard!");
        }
    };

    return (
        <section id="job-portal-section" className="component-section">
            <div className="card">
                <h2>HR Job Portal & ATS Gateway</h2>
                <div className="card-content">
                    
                    {isEmployer && (
                        <div style={{ marginBottom: '40px', background: 'rgba(0,0,0,0.2)', padding: '20px', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
                            <h3 style={{ color: 'var(--secondary-color)', marginTop: 0 }}>Create New Job Requisition</h3>
                            <form onSubmit={handleCreate}>
                                <div className="form-row">
                                    <label>Job Title <input type="text" value={title} onChange={e=>setTitle(e.target.value)} required placeholder="e.g. Senior Drill Operator"/></label>
                                </div>
                                <div className="form-row">
                                    <label>Job Description <textarea rows="2" value={desc} onChange={e=>setDesc(e.target.value)} required style={{ width: '100%', padding: '12px', background: 'rgba(15, 23, 42, 0.8)', border: '1px solid var(--border-color)', borderRadius: '8px', color: 'white' }}/></label>
                                </div>
                                <div className="form-row">
                                    <label>R1 Check Form (Initial Candidate Requirements) <textarea rows="2" value={r1Check} onChange={e=>setR1Check(e.target.value)} required style={{ width: '100%', padding: '12px', background: 'rgba(15, 23, 42, 0.8)', border: '1px solid var(--border-color)', borderRadius: '8px', color: 'white' }}/></label>
                                </div>
                                <button type="submit" className="btn-primary">Submit for Approval</button>
                            </form>
                        </div>
                    )}

                    <div>
                        <h3 style={{ color: 'var(--accent-color)' }}>{isCandidate ? 'Live Job Openings' : 'Job Requisitions'}</h3>
                        {jobs.length === 0 ? <p className="empty-state">No jobs found in the system right now.</p> : (
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                                {jobs.map(job => {
                                    if (isCandidate && job.status !== 'Live') return null;
                                    return (
                                        <div key={job.id} style={{ border: '1px solid var(--border-color)', padding: '20px', borderRadius: '12px', background: 'rgba(255,255,255,0.02)' }}>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                                                <strong style={{ fontSize: '1.2rem' }}>{job.title}</strong>
                                                <span className={`status-badge ${job.status === 'Live' ? 'approved' : 'pending'}`}>{job.status}</span>
                                            </div>
                                            <p style={{ fontSize: '0.95rem', color: 'var(--text-light)' }}>{job.desc}</p>
                                            <div style={{ padding: '15px', background: 'rgba(0,0,0,0.3)', fontSize: '0.85rem', borderRadius: '8px', marginTop: '15px' }}>
                                                <strong style={{color:'var(--warning-color)'}}>R1 Check Requirements:</strong> {job.r1Check}
                                                {job.r2Check && <><br/><br/><strong style={{color:'var(--secondary-color)'}}>R2 Recruiter Requirements:</strong> {job.r2Check}</>}
                                            </div>
                                            
                                            <div style={{ marginTop: '20px' }}>
                                                {isCoordinator && job.status === 'Pending Approval' && (
                                                    <button onClick={() => handleApprove(job.id)} className="btn-approve">Approve Post & Assign R2 Check</button>
                                                )}
                                                {isCandidate && (
                                                    <button onClick={() => handleApply(job.id)} className="btn-primary">Apply Now</button>
                                                )}
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
export default JobPortal;

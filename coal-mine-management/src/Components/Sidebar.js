import React from 'react';
import '../App.css';

function Sidebar({ activeTab, setActiveTab, onLogout, currentUser }) {
    let navItems = [
        { id: 'home', icon: 'home', label: 'Home' },
        { id: 'safety-checklist', icon: 'playlist_add_check', label: 'DGMS Checklist' },
        { id: 'shift-handover', icon: 'event_note', label: 'Shift Handover Log' },
        { id: 'handover-reports', icon: 'summarize', label: 'Handover Reports' },
        { id: 'hazard-id', icon: 'health_and_safety', label: 'Hazard Identification' },
        { id: 'incident-reporting', icon: 'report_problem', label: 'Incident Reporting' },
        { id: 'emergency-response', icon: 'campaign', label: 'Emergency Response' },
        { id: 'internal-messaging', icon: 'chat', label: 'Internal Messaging' },
        { id: 'erp-security', icon: 'security', label: 'ERP & Security Sync' },
        { id: 'mine-assignment', icon: 'business', label: 'Mine Assignment' },
        { id: 'shift-scheduling', icon: 'schedule', label: 'Shift Scheduling' },
        { id: 'shift-exchange', icon: 'swap_horiz', label: 'Shift Exchange' },
        { id: 'exchange-requests', icon: 'assignment', label: 'Exchange Requests' },
        { id: 'logs', icon: 'description', label: 'Logs' },
        { id: 'faults', icon: 'warning', label: 'Faults' },
        { id: 'job-portal', icon: 'work', label: 'HR Job Portal' },
        { id: 'ats-review', icon: 'people', label: 'ATS Pipeline' }
    ];

    if (currentUser) {
        if (currentUser.role === 'employee') {
            navItems = navItems.filter(item => ['home', 'shift-exchange', 'logs', 'faults', 'hazard-id', 'incident-reporting', 'emergency-response', 'internal-messaging'].includes(item.id));
        } else if (currentUser.role === 'candidate') {
            navItems = navItems.filter(item => ['home', 'job-portal'].includes(item.id));
        } else if (['employer', 'coordinator'].includes(currentUser.role)) {
            navItems = navItems.filter(item => ['home', 'job-portal', 'ats-review'].includes(item.id));
        } else if (currentUser.role === 'recruiter') {
            navItems = navItems.filter(item => ['home', 'ats-review'].includes(item.id));
        } else if (currentUser.role !== 'admin') {
            navItems = navItems.filter(item => !['mine-assignment', 'job-portal', 'ats-review'].includes(item.id));
        }
    }

    return (
        <aside className="sidebar">
            <div className="logo">
                <img src="/OIP (1).jpeg" alt="Coal Mine Management" onError={(e) => { e.target.src = "https://via.placeholder.com/100?text=Logo"; }} />
                <h3>CMMS</h3>
            </div>
            <nav className="sidebar-nav">
                <ul>
                    {navItems.map(item => (
                        <li key={item.id}>
                            <a 
                                href={`#${item.id}`} 
                                className={activeTab === item.id ? 'active' : ''}
                                onClick={(e) => {
                                    e.preventDefault();
                                    setActiveTab(item.id);
                                }}
                            >
                                <i className="material-icons">{item.icon}</i> 
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
            <div className="sidebar-footer">
                <button className="btn-logout" onClick={onLogout}>
                    <i className="material-icons">logout</i>
                    Logout
                </button>
            </div>
        </aside>
    );
}

export default Sidebar;

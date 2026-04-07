import React from 'react';
import '../App.css';

function Header({ activeTab, currentUser, unreadAlerts }) {
    const getTitle = () => {
        if (activeTab === 'home') return 'Dashboard';
        return activeTab.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    };

    return (
        <header>
            <div className="header-title">
                <h1>{getTitle()}</h1>
            </div>
            <div className="user-actions">
                <div className="current-user">
                    <i className="material-icons">
                        {currentUser?.role === 'admin' ? 'admin_panel_settings' : 'account_circle'}
                    </i>
                    <span>{currentUser?.name || 'User'}</span>
                </div>
                <button className="btn-icon" style={{ position: 'relative' }}>
                    <i className="material-icons">notifications</i>
                    {unreadAlerts > 0 && <span style={{ position: 'absolute', top: -5, right: -5, background: 'var(--danger-color)', color: 'white', borderRadius: '50%', padding: '2px 6px', fontSize: '0.7rem' }}>{unreadAlerts}</span>}
                </button>
                <button className="btn-icon"><i className="material-icons">settings</i></button>
            </div>
        </header>
    );
}

export default Header;

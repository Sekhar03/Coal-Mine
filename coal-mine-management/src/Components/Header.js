import React from 'react';
import '../App.css';

function Header() {
    return (
        <header>
            <h1>Coal Mine Management System</h1>
            <div className="user-actions">
                <i className="material-icons">notifications</i>
                <i className="material-icons">account_circle</i>
            </div>
        </header>
    );
}

export default Header;

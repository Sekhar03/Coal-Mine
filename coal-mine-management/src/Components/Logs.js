import React from 'react';
import '../App.css';

function Logs() {
    return (
        <section id="logs-section" className="profile">
            <h2>Logs</h2>
            <div className="logs-content">
                <ul className="logs-list">
                    <li>Log 1: Shift Manager A assigned to Mine X on 01-09-2024</li>
                    <li>Log 2: Shift scheduled for Mine Y on 02-09-2024 at 10:00 AM</li>
                    {/* Add more logs as necessary */}
                </ul>
            </div>
        </section>
    );
}

export default Logs;

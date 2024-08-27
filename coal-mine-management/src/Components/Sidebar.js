import React from 'react';
import '../App.css';

function Sidebar() {
    return (
        <aside className="sidebar">
            <div className="logo">
                <img src="OIP (1).jpeg" alt="Coal Mine Management System Logo" />
            </div>
            <nav>
                <ul>
                    <li><a href="#"><i className="material-icons">home</i> Home</a></li>
                    <li><a href="#mine-assignment-section"><i className="material-icons">business</i> Mine Assignment</a></li>
                    <li><a href="#shift-scheduling-section"><i className="material-icons">schedule</i> Shift Scheduling</a></li>
                    <li><a href="#shift-exchange-section"><i className="material-icons">swap_horiz</i> Shift Exchange</a></li>
                    <li><a href="#shift-exchange-requests-section"><i className="material-icons">assignment</i> Exchange Requests</a></li>
                    <li><a href="#logs-section"><i className="material-icons">description</i> Logs</a></li>
                    <li><a href="#faults-section"><i className="material-icons">warning</i> Faults</a></li>
                </ul>
            </nav>
        </aside>
    );
}

export default Sidebar;

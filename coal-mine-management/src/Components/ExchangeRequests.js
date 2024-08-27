import React from 'react';
import '../App.css';

function ExchangeRequests() {
    return (
        <div className="section-container">
            <h2 className="section-heading">Exchange Requests</h2>
            <ul className="logs-list">
                <li>Request 1: Manager A -> Manager B (Date: 01-09-2024, Time: 10:00 AM)</li>
                <li>Request 2: Manager C -> Manager D (Date: 02-09-2024, Time: 02:00 PM)</li>
                {/* Add more requests as necessary */}
            </ul>
        </div>
    );
}

export default ExchangeRequests;

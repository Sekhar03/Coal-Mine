import React from 'react';
import '../App.css';

function ShiftExchange() {
    return (
        <section id="shift-exchange-section" className="profile">
            <h2>Shift Exchange</h2>
            <div className="profile-content">
                <form id="shift-exchange-form">
                    <div className="form-row">
                        <label>
                            Current Shift Manager
                            <input type="text" id="current-shift-manager" required />
                        </label>
                        <label>
                            New Shift Manager
                            <input type="text" id="new-shift-manager" required />
                        </label>
                        <label>
                            Date
                            <input type="date" id="exchange-date" required />
                        </label>
                        <label>
                            Time
                            <input type="time" id="exchange-time" required />
                        </label>
                    </div>
                    <button type="submit">Request Exchange</button>
                </form>
            </div>
        </section>
    );
}

export default ShiftExchange;

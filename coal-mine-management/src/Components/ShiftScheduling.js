import React from 'react';
import '../App.css';

function ShiftScheduling() {
    return (
        <section id="shift-scheduling-section" className="profile">
            <h2>Shift Scheduling</h2>
            <div className="profile-content">
                <form id="shift-scheduling-form">
                    <div className="form-row">
                        <label>
                            Date
                            <input type="date" id="shift-date" required />
                        </label>
                        <label>
                            Time
                            <input type="time" id="shift-time" required />
                        </label>
                        <label>
                            Shift Manager
                            <input type="text" id="shift-manager" required />
                        </label>
                    </div>
                    <button type="submit">Schedule Shift</button>
                </form>
            </div>
        </section>
    );
}

export default ShiftScheduling;

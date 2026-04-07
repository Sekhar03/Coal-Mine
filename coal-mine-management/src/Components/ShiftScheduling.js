import React, { useState } from 'react';
import '../App.css';

function ShiftScheduling({ onSchedule }) {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [manager, setManager] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSchedule({ date, time, manager });
        setDate('');
        setTime('');
        setManager('');
        alert('Shift Scheduled Successfully!');
    };

    return (
        <section id="shift-scheduling-section" className="component-section">
            <div className="card">
                <h2>Shift Scheduling</h2>
                <div className="card-content">
                    <form id="shift-scheduling-form" onSubmit={handleSubmit}>
                        <div className="form-row multi-col">
                            <label>
                                Date
                                <input type="date" value={date} onChange={e => setDate(e.target.value)} required />
                            </label>
                            <label>
                                Time
                                <input type="time" value={time} onChange={e => setTime(e.target.value)} required />
                            </label>
                            <label>
                                Shift Manager
                                <input type="text" value={manager} onChange={e => setManager(e.target.value)} placeholder="Manager Name" required />
                            </label>
                        </div>
                        <div className="form-actions">
                            <button type="submit" className="btn-primary">Schedule Shift</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default ShiftScheduling;

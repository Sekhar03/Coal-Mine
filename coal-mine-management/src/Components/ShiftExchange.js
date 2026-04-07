import React, { useState, useEffect } from 'react';
import '../App.css';

function ShiftExchange({ onRequest, currentUser }) {
    const [currentWorker, setCurrentWorker] = useState('');
    const [newWorker, setNewWorker] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

    useEffect(() => {
        if (currentUser && currentUser.role !== 'admin') {
            setCurrentWorker(currentUser.name);
        }
    }, [currentUser]);

    const isRestricted = currentUser?.role !== 'admin';

    const handleSubmit = (e) => {
        e.preventDefault();
        onRequest({ currentWorker, newWorker, date, time });
        if (!isRestricted) {
            setCurrentWorker('');
        }
        setNewWorker('');
        setDate('');
        setTime('');
        alert('Exchange Request Submitted successfully!');
    };

    return (
        <section id="shift-exchange-section" className="component-section">
            <div className="card">
                <h2>Shift Change Request</h2>
                <div className="card-content">
                    <form id="shift-exchange-form" onSubmit={handleSubmit}>
                        <div className="form-row multi-col">
                            <label>
                                Your Name
                                <input 
                                    type="text" 
                                    value={currentWorker} 
                                    onChange={e => setCurrentWorker(e.target.value)} 
                                    required 
                                    placeholder="e.g. John Doe" 
                                    readOnly={isRestricted}
                                    style={isRestricted ? { opacity: 0.7, cursor: 'not-allowed' } : {}}
                                />
                            </label>
                            <label>
                                Colleague Name
                                <input type="text" value={newWorker} onChange={e => setNewWorker(e.target.value)} required placeholder="e.g. Jane Smith" />
                            </label>
                        </div>
                        <div className="form-row multi-col">
                            <label>
                                Date
                                <input type="date" value={date} onChange={e => setDate(e.target.value)} required />
                            </label>
                            <label>
                                Time
                                <input type="time" value={time} onChange={e => setTime(e.target.value)} required />
                            </label>
                        </div>
                        <div className="form-actions">
                            <button type="submit" className="btn-primary">Submit Request</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default ShiftExchange;

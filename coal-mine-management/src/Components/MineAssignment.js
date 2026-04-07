import React, { useState } from 'react';
import '../App.css';

function MineAssignment({ onAssign }) {
    const [mineName, setMineName] = useState('');
    const [siteManager, setSiteManager] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onAssign({ mineName, siteManager });
        setMineName('');
        setSiteManager('');
        alert('Mine assigned successfully!');
    };

    return (
        <section id="mine-assignment-section" className="component-section">
            <div className="card">
                <h2>Mine Assignment</h2>
                <div className="card-content flex-row">
                    <div className="profile-image">
                        <i className="material-icons assignment-icon">business</i>
                        <h3>Mine Manager</h3>
                        <p>ID: MM001</p>
                        <button className="btn-secondary">Change Details</button>
                    </div>
                    <div className="form-container">
                        <h3>Fill Assignment Details</h3>
                        <form id="mine-assignment-form" onSubmit={handleSubmit}>
                            <div className="form-row">
                                <label>
                                    Mine Name
                                    <input type="text" value={mineName} onChange={e => setMineName(e.target.value)} required placeholder="e.g., Alpha Zone" />
                                </label>
                                <label>
                                    Site Manager
                                    <input type="text" value={siteManager} onChange={e => setSiteManager(e.target.value)} required placeholder="e.g., John Doe" />
                                </label>
                            </div>
                            <button type="submit" className="btn-primary">Assign Mine</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MineAssignment;

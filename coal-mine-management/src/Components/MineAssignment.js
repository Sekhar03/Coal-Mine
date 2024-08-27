import React from 'react';
import '../App.css';

function MineAssignment() {
    return (
        <section id="mine-assignment-section" className="profile">
            <h2>Mine Assignment</h2>
            <div className="profile-content">
                <div className="profile-image">
                    <h3>Mine Manager</h3>
                    <p>ID: MM001</p>
                    <button>Change Password</button>
                </div>
                <div className="profile-details">
                    <h3>Fill Details</h3>
                    <form id="mine-assignment-form">
                        <div className="form-row">
                            <label>
                                Mine Name
                                <input type="text" id="mine-name" required />
                            </label>
                            <label>
                                Site Manager
                                <input type="text" id="site-manager" required />
                            </label>
                        </div>
                        <button type="submit">Assign Mine</button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default MineAssignment;

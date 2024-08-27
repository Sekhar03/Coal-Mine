import React from 'react';
import '../App.css';

function Faults() {
    return (
        <section id="faults-section" className="profile">
            <h2>Faults</h2>
            <div className="faults-content">
                <ul className="faults-list">
                    <li>Fault 1: Equipment malfunction in Mine A on 01-09-2024</li>
                    <li>Fault 2: Power outage in Mine B on 02-09-2024</li>
                    {/* Add more faults as necessary */}
                </ul>
            </div>
        </section>
    );
}

export default Faults;

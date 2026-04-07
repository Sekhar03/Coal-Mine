import React, { useState } from 'react';
import '../App.css';

function SafetyChecklist() {
    const [checks, setChecks] = useState({
        ventilation: false,
        gasLevels: false,
        equipment: false,
        communication: false
    });

    const handleToggle = (key) => {
        setChecks(prev => ({ ...prev, [key]: !prev[key] }));
    };

    const isComplete = Object.values(checks).every(v => v === true);

    return (
        <section id="safety-checklist-section" className="component-section">
            <div className="card">
                <h2>Pre-Shift DGMS Safety Checklist</h2>
                <div className="card-content">
                    <p style={{ color: 'var(--text-muted)', marginBottom: '20px' }}>
                        Ensure all statutory safety rules are verified digitally before mining operations commence. Failure to comply violates the Safety Management Plan.
                    </p>
                    
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginBottom: '30px' }}>
                        <label style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '15px', background: checks.ventilation ? 'rgba(16, 185, 129, 0.2)' : 'rgba(0,0,0,0.2)', border: '1px solid', borderColor: checks.ventilation ? 'var(--accent-color)' : 'var(--border-color)', borderRadius: '10px', cursor: 'pointer', transition: 'all 0.3s ease' }}>
                            <input type="checkbox" checked={checks.ventilation} onChange={() => handleToggle('ventilation')} style={{ width: '20px', height: '20px' }} />
                            Primary and secondary ventilation fans are operational.
                        </label>

                        <label style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '15px', background: checks.gasLevels ? 'rgba(16, 185, 129, 0.2)' : 'rgba(0,0,0,0.2)', border: '1px solid', borderColor: checks.gasLevels ? 'var(--accent-color)' : 'var(--border-color)', borderRadius: '10px', cursor: 'pointer', transition: 'all 0.3s ease' }}>
                            <input type="checkbox" checked={checks.gasLevels} onChange={() => handleToggle('gasLevels')} style={{ width: '20px', height: '20px' }} />
                            CH4 and CO continuous monitoring sensors are active and calibrated.
                        </label>

                        <label style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '15px', background: checks.equipment ? 'rgba(16, 185, 129, 0.2)' : 'rgba(0,0,0,0.2)', border: '1px solid', borderColor: checks.equipment ? 'var(--accent-color)' : 'var(--border-color)', borderRadius: '10px', cursor: 'pointer', transition: 'all 0.3s ease' }}>
                            <input type="checkbox" checked={checks.equipment} onChange={() => handleToggle('equipment')} style={{ width: '20px', height: '20px' }} />
                            Heavy machinery is grounded and pre-start alarms function correctly.
                        </label>

                        <label style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '15px', background: checks.communication ? 'rgba(16, 185, 129, 0.2)' : 'rgba(0,0,0,0.2)', border: '1px solid', borderColor: checks.communication ? 'var(--accent-color)' : 'var(--border-color)', borderRadius: '10px', cursor: 'pointer', transition: 'all 0.3s ease' }}>
                            <input type="checkbox" checked={checks.communication} onChange={() => handleToggle('communication')} style={{ width: '20px', height: '20px' }} />
                            Underground-to-Surface communication lines verified.
                        </label>
                    </div>

                    <button 
                        className="btn-primary" 
                        style={{ width: '100%', opacity: isComplete ? 1 : 0.5, cursor: isComplete ? 'pointer' : 'not-allowed' }}
                        disabled={!isComplete}
                        onClick={() => alert("Checklist certified and signed digitally.")}
                    >
                        CERTIFY SAFE TO OPERATE
                    </button>
                    {!isComplete && <p style={{ textAlign: 'center', color: 'var(--warning-color)', marginTop: '10px', fontSize: '0.85rem' }}>*All checks must be verified before certification.</p>}
                </div>
            </div>
        </section>
    );
}

export default SafetyChecklist;

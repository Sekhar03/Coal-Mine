import React, { useState } from 'react';
import '../App.css';

function InternalMessaging({ messages, onSendMessage, currentUser }) {
    const [text, setText] = useState('');

    const handleSend = (e) => {
        e.preventDefault();
        if (!text.trim()) return;
        onSendMessage({
            sender: currentUser.name,
            role: currentUser.role,
            message: text,
            timestamp: new Date().toLocaleTimeString()
        });
        setText('');
    };

    return (
        <section id="messaging-section" className="component-section" style={{ height: 'calc(100vh - 150px)', display: 'flex', flexDirection: 'column' }}>
            <div className="card" style={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <h2>Internal Messaging</h2>
                
                <div style={{ flexGrow: 1, overflowY: 'auto', padding: '20px', background: 'rgba(0,0,0,0.2)', border: '1px inset var(--border-color)', borderRadius: '12px', marginBottom: '20px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
                    {messages.length === 0 ? (
                        <p className="empty-state" style={{ margin: 'auto' }}>No messages yet. Send a broadcast to the operations team!</p>
                    ) : (
                        messages.map(msg => (
                            <div key={msg.id} style={{ 
                                alignSelf: msg.sender === currentUser.name ? 'flex-end' : 'flex-start',
                                maxWidth: '70%',
                                background: msg.sender === currentUser.name ? 'rgba(59, 130, 246, 0.2)' : 'rgba(255, 255, 255, 0.05)',
                                padding: '15px',
                                borderRadius: '12px',
                                border: `1px solid ${msg.sender === currentUser.name ? 'var(--secondary-color)' : 'var(--border-color)'}`
                            }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px', gap: '20px', fontSize: '0.85rem' }}>
                                    <strong style={{ color: msg.sender === currentUser.name ? 'var(--secondary-color)' : 'var(--accent-color)' }}>{msg.sender}</strong>
                                    <span style={{ color: 'var(--text-muted)' }}>{msg.timestamp}</span>
                                </div>
                                <p style={{ margin: 0 }}>{msg.message}</p>
                            </div>
                        ))
                    )}
                </div>

                <form onSubmit={handleSend} style={{ display: 'flex', gap: '10px' }}>
                    <input 
                        type="text" 
                        value={text} 
                        onChange={e => setText(e.target.value)} 
                        placeholder="Broadcast an update or query..." 
                        style={{ flexGrow: 1, margin: 0 }}
                    />
                    <button type="submit" className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                        Send <i className="material-icons" style={{ fontSize: '1rem' }}>send</i>
                    </button>
                </form>
            </div>
        </section>
    );
}

export default InternalMessaging;

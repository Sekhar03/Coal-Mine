import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './App';

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);

// PWA Offline registration
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js').then(
            (registration) => { console.log('ServiceWorker registration successful'); },
            (err) => { console.log('ServiceWorker registration failed: ', err); }
        );
    });
}

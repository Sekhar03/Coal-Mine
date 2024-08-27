import React from 'react';
import Sidebar from './Components/Sidebar';
import Header from './Components/Header';
import MineAssignment from './Components/MineAssignment';
import ShiftScheduling from './Components/ShiftScheduling';
import ShiftExchange from './Components/ShiftExchange';
import ExchangeRequests from './Components/ExchangeRequests';
import Logs from './Components/Logs';
import Faults from './Components/Faults';
import './App.css';

function App() {
  return (
      <div className="container">
          <Sidebar />
          <main>
              <Header />
              <MineAssignment />
              <ShiftScheduling />
              <ShiftExchange />
              <ExchangeRequests />
              <Logs />
              <Faults />
          </main>
      </div>
  );
}

export default App;
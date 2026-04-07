import React, { useState } from 'react';
import Sidebar from './Components/Sidebar';
import Header from './Components/Header';
import MineAssignment from './Components/MineAssignment';
import ShiftScheduling from './Components/ShiftScheduling';
import ShiftExchange from './Components/ShiftExchange';
import ExchangeRequests from './Components/ExchangeRequests';
import Logs from './Components/Logs';
import Faults from './Components/Faults';
import Login from './Components/Login';
import ShiftHandover from './Components/ShiftHandover';
import HandoverReports from './Components/HandoverReports';
import HazardIdentification from './Components/HazardIdentification';
import IncidentReporting from './Components/IncidentReporting';
import EmergencyResponse from './Components/EmergencyResponse';
import InternalMessaging from './Components/InternalMessaging';
import SafetyChecklist from './Components/SafetyChecklist';
import ERPSecurity from './Components/ERPSecurity';
import JobPortal from './Components/JobPortal';
import ATSReview from './Components/ATSReview';
import ProductivityDashboard from './Components/ProductivityDashboard';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [currentUser, setCurrentUser] = useState(null);
  const [logs, setLogs] = useState([]);
  const [faults, setFaults] = useState([]);
  const [shifts, setShifts] = useState([]);
  const [requests, setRequests] = useState([]);
  const [handovers, setHandovers] = useState([]);
  const [hazards, setHazards] = useState([]);
  const [messages, setMessages] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [applications, setApplications] = useState([]);

  const handleLogin = (user) => setCurrentUser(user);
  const handleLogout = () => {
    setCurrentUser(null);
    setActiveTab('home');
  };

  const addLog = (message) => {
    setLogs((prev) => [{ id: Date.now(), message, date: new Date().toLocaleString() }, ...prev]);
  };

  const addFault = (message) => {
    setFaults((prev) => [{ id: Date.now(), message, date: new Date().toLocaleString() }, ...prev]);
    addLog(`Fault Reported: ${message}`);
  };

  const scheduleShift = (shiftData) => {
    setShifts((prev) => [{ id: Date.now(), ...shiftData }, ...prev]);
    addLog(`Shift scheduled for ${shiftData.manager} on ${shiftData.date} at ${shiftData.time}`);
  };

  const assignMine = (assignmentData) => {
    addLog(`Mine ${assignmentData.mineName} assigned to Site Manager ${assignmentData.siteManager}`);
  };

  const handleNewHandover = (data) => {
    setHandovers((prev) => [{ id: Date.now(), ...data }, ...prev]);
    addLog(`Shift Handover logged by ${data.supervisor}`);
    
    // Automated Alerting the next shift
    handleNewMessage({
        sender: 'SYSTEM ALERT',
        role: 'admin',
        message: `AUTOMATED ALERT: Incoming shift managers, a new Handover Log from ${data.supervisor} has been submitted and is ready for review.`
    });
  };

  const requestExchange = (exchangeData) => {
    setRequests((prev) => [{ id: Date.now(), status: 'Pending', ...exchangeData }, ...prev]);
    addLog(`Shift exchange requested by ${exchangeData.currentWorker} with ${exchangeData.newWorker}`);
  };

  const handleNewHazard = (hazard) => setHazards((prev) => [{ id: Date.now(), ...hazard }, ...prev]);
  const handleNewIncident = (incident) => addLog(`CRITICAL INCIDENT REPORTED at ${incident.location} by ${incident.reporter}: ${incident.description}`);
  const handleNewMessage = (msg) => setMessages((prev) => [...prev, { id: Date.now(), ...msg }]);

  const handleCreateJob = (job) => setJobs(prev => [{ id: Date.now() + '', ...job }, ...prev]);
  const handleApproveJob = (jobId, r2) => setJobs(prev => prev.map(j => j.id === jobId ? { ...j, status: 'Live', r2Check: r2 } : j));
  const handleApplyJob = (jobId, candidateName) => setApplications(prev => [{ id: Date.now() + '', jobId, candidateName, status: 'Under Review' }, ...prev]);
  const handleShortlistJob = (appId) => setApplications(prev => prev.map(a => a.id === appId ? { ...a, status: 'Shortlisted' } : a));

  const handleRequestAction = (id, action) => {
    setRequests((prev) =>
      prev.map((req) => (req.id === id ? { ...req, status: action } : req))
    );
    const req = requests.find((r) => r.id === id);
    if (req) {
      addLog(`Shift exchange request ${id} was ${action} by Admin.`);
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <div className="home-dashboard">
            <h2>Welcome to the Premium Dashboard</h2>
            <div className="dashboard-stats">
              <div className="stat-card"><h3>{shifts.length}</h3><p>Active Shifts</p></div>
              <div className="stat-card"><h3>{requests.filter(r => r.status === 'Pending').length}</h3><p>Pending Requests</p></div>
              <div className="stat-card"><h3>{faults.length}</h3><p>New Faults</p></div>
              <div className="stat-card"><h3>{logs.length}</h3><p>System Logs</p></div>
            </div>
          </div>
        );
      case 'mine-assignment':
        return <MineAssignment onAssign={assignMine} />;
      case 'shift-scheduling':
        return <ShiftScheduling onSchedule={scheduleShift} />;
      case 'shift-exchange':
        return <ShiftExchange onRequest={requestExchange} currentUser={currentUser} />;
      case 'exchange-requests':
        return <ExchangeRequests requests={requests} onAction={handleRequestAction} currentUser={currentUser} />;
      case 'shift-handover':
        return <ShiftHandover onSubmitHandover={handleNewHandover} currentUser={currentUser} />;
      case 'handover-reports':
        return <HandoverReports handovers={handovers} />;
      case 'logs':
        return <Logs logs={logs} />;
      case 'faults':
        return <Faults faults={faults} onAddFault={addFault} />;
      case 'hazard-id':
        return <HazardIdentification hazards={hazards} onAddHazard={handleNewHazard} currentUser={currentUser} />;
      case 'incident-reporting':
        return <IncidentReporting onReportIncident={handleNewIncident} currentUser={currentUser} />;
      case 'emergency-response':
        return <EmergencyResponse />;
      case 'internal-messaging':
        return <InternalMessaging messages={messages} onSendMessage={handleNewMessage} currentUser={currentUser} />;
      case 'safety-checklist':
        return <SafetyChecklist />;
      case 'erp-security':
        return <ERPSecurity />;
      case 'job-portal':
        return <JobPortal currentUser={currentUser} jobs={jobs} onCreateJob={handleCreateJob} onApproveJob={handleApproveJob} onApplyJob={handleApplyJob} />;
      case 'ats-review':
        return <ATSReview currentUser={currentUser} applications={applications} onShortlist={handleShortlistJob} />;
      default:
        // Use the default home tab as the comprehensive Productivity & Safety dashboard
        const summaryStats = {
          faults: faults.length,
          hazards: hazards.length,
          handovers: handovers.length
        };
        return <ProductivityDashboard summaryStats={summaryStats} />;
    }
  };

  if (!currentUser) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div className="container">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} onLogout={handleLogout} currentUser={currentUser} />
      <main>
        <Header activeTab={activeTab} currentUser={currentUser} />
        <div className="content-area">
          {renderContent()}
        </div>
      </main>
    </div>
  );
}

export default App;
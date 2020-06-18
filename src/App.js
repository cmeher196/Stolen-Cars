import React from 'react';
import './App.css';
import OwnerDashboard from './Components/OwnerDashboard';

function App() {
  return (
    <div className="App">
      <h1>Stolen cars!!</h1>
      {/* <PoliceMenDashboard /> */}
      <OwnerDashboard />
    </div>
  );
}

export default App;

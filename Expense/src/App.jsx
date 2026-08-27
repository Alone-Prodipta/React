import { useState } from 'react'
import './App.css'
import Summary from './components/summary.jsx'
import QuickAccess from './components/quick_access.jsx'
import Charts from "./components/charts.jsx";

function App() {

  return (
    <>
      <Summary />
      <br />
      <QuickAccess />
      <div className="charts-container mt-6">
        <Charts />
      </div>
    </>
  );
}

export default App;

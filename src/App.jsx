// src/App.jsx
import React from 'react';
import DashboardLayout from './components/layout/DashboardLayout';
import Dashboard from './components/Dashboard';
import '@fontsource/inter'; 

const App = () => {
  return (
    <DashboardLayout>
      {/* Pass Dashboard as children */}
      <Dashboard />
    </DashboardLayout>
  );
};

export default App;

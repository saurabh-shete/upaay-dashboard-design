import React, { useState } from 'react';
import Sidebar from '../Sidebar';
import Header from '../Header';

const DashboardLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Sidebar open/close state

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex flex-col h-screen bg-[#FFFFFF]">
      {/* Pass the toggleSidebar and isSidebarOpen to Header */}
      <Header toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />

      <div className="flex h-full">
        {/* Sidebar */}
        <div className={`transition-all duration-500 ${isSidebarOpen ? 'w-64' : 'w-16'}`}>
          <Sidebar isSidebarOpen={isSidebarOpen} />
        </div>

        {/* Main Content */}
        <div className={`flex-1 `}>
          {/* Render the children passed, which will be the Dashboard component */}
          <div className="dashboard-children p-4">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;

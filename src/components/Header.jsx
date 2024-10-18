import React from 'react';
import { BellIcon, ChatIcon, ChevronLeftIcon, ChevronRightIcon, CogIcon } from "@heroicons/react/outline";
import {  SearchIcon } from "@heroicons/react/solid"; // SearchIcon for the search bar

const Header = ({ toggleSidebar, isSidebarOpen }) => {
  return (
    <div className="flex justify-between items-center border-b border-gray-300 bg-white">
      {/* Sidebar Toggle and Project M. */}
      <div className="flex items-center justify-between border-r border-gray-300 pr-4 w-64 p-3">
        {isSidebarOpen && <h2 className="text-2xl font-bold">Project M.</h2>}
        <button
          // onClick={toggleSidebar}
          className={`transition-transform transform ${isSidebarOpen ? "rotate-0" : "rotate-180"} p-2`}
          style={{ zIndex: 1000 }}
        >
          {isSidebarOpen ? (
            <div className='flex -space-x-4'>
            <ChevronLeftIcon className="w-6 h-6" />
            <ChevronLeftIcon className="w-6 h-6" />
            </div>
          ) : (
            <ChevronRightIcon className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Search bar with search icon */}
      <div className="flex-grow mx-6 relative"> {/* Relative positioning for the container */}
        <span className="absolute inset-y-0 left-0 flex items-center pl-3"> {/* Position the icon */}
          <SearchIcon className="w-5 h-5 text-gray-500" />
        </span>
        <input
          type="text"
          placeholder="Search for anything..."
          className="w-full max-w-xs p-2 pl-10 bg-[#F5F5F5] text-[#787486] rounded-md"
        />
      </div>

    <div className='flex justify-between px-6'>

    
      {/* Icons and user info */}
      <div className="flex items-center space-x-6 w-40">
        {/* Icons */}
      
        <CogIcon className="w-6 h-6 text-gray-600" />
        <ChatIcon className="w-6 h-6 text-gray-600" />
        <BellIcon className="w-6 h-6 text-gray-600" />


       
      </div>
    {/* User Info */}
<div className="flex items-center space-x-2">
  <div className='flex flex-col mr-2'>
    <span className="text-[#0D062D] font-medium text-right">Palak Jain</span>
    <span className="text-[#787486] text-xs text-right">Rajasthan, India</span> {/* Reduced font size */}
  </div>
  
  <div className="relative flex items-center">
    <img
      src="src/assets/palak jain.png" // Replace with user image URL
      alt="Palak Jain"
      className="w-9 h-9 rounded-full object-cover object-top" // Ensure face is centered
    />
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 text-[#787486]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
    </svg>
  </div>
</div>

      </div>
    </div>
  );
};

export default Header;

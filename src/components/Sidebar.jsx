import React from "react";
import {
  HomeIcon,
  MailIcon,
  ClipboardCheckIcon,
  UsersIcon,
  CogIcon,
  PlusIcon,
  DotsHorizontalIcon,
  LightBulbIcon,
} from "@heroicons/react/outline";
import ThoughtsTimeCard from "./cards/ThoughtsTimeCard";

const Sidebar = ({ isSidebarOpen }) => {
  return (
    <div
      className={`h-screen p-4 pt-6 relative transition-all duration-300 ease-in-out border-r border-gray-300 bg-white ${
        isSidebarOpen ? "w-64" : "w-16"
      }`}
      style={{
        transition: "width 0.5s ease-in-out",
      }}
    >
      {/* Sidebar Content */}
      <div className="transition-all ease-in-out duration-500 flex flex-col h-full">
        {/* Navigation Section */}
        <nav>
          <ul>
            <li className="mb-5">
              <a
                href="/"
                className="flex items-center text-gray-700 hover:text-purple-600"
              >
                <HomeIcon className="w-6 h-6" />
                {/* Only hide text when sidebar is closed */}
                <span
                  className={`ml-3 transition-opacity ease-in-out delay-150 ${
                    isSidebarOpen ? "opacity-100 duration-500" : "opacity-0"
                  }`}
                  style={{
                    transitionProperty: "opacity",
                  }}
                >
                  Home
                </span>
              </a>
            </li>
            <li className="mb-5">
              <a
                href="/messages"
                className="flex items-center text-gray-700 hover:text-purple-600"
              >
                <MailIcon className="w-6 h-6" />
                <span
                  className={`ml-3 transition-opacity ease-in-out delay-150 ${
                    isSidebarOpen ? "opacity-100 duration-500" : "opacity-0"
                  }`}
                  style={{
                    transitionProperty: "opacity",
                  }}
                >
                  Messages
                </span>
              </a>
            </li>
            <li className="mb-5">
              <a
                href="/tasks"
                className="flex items-center text-gray-700 hover:text-purple-600"
              >
                <ClipboardCheckIcon className="w-6 h-6" />
                <span
                  className={`ml-3 transition-opacity ease-in-out delay-150 ${
                    isSidebarOpen ? "opacity-100 duration-500" : "opacity-0"
                  }`}
                  style={{
                    transitionProperty: "opacity",
                  }}
                >
                  Tasks
                </span>
              </a>
            </li>
            <li className="mb-5">
              <a
                href="/members"
                className="flex items-center text-gray-700 hover:text-purple-600"
              >
                <UsersIcon className="w-6 h-6" />
                <span
                  className={`ml-3 transition-opacity ease-in-out delay-150 ${
                    isSidebarOpen ? "opacity-100 duration-500" : "opacity-0"
                  }`}
                  style={{
                    transitionProperty: "opacity",
                  }}
                >
                  Members
                </span>
              </a>
            </li>
            <li className="mb-5">
              <a
                href="/settings"
                className="flex items-center text-gray-700 hover:text-purple-600"
              >
                <CogIcon className="w-6 h-6" />
                <span
                  className={`ml-3 transition-opacity ease-in-out delay-150 ${
                    isSidebarOpen ? "opacity-100 duration-500" : "opacity-0"
                  }`}
                  style={{
                    transitionProperty: "opacity",
                  }}
                >
                  Settings
                </span>
              </a>
            </li>
          </ul>
        </nav>

        {/* Conditionally render "My Projects" only when sidebar is open */}
        {isSidebarOpen && (
          <div className="mt-2 border-t border-gray-300 pt-1">
            <div className="flex justify-between items-center ">
              <h4 className="text-[#787486] uppercase font-bold">My Projects</h4>
              <button className="text-gray-600 hover:text-purple-600">
                {/* Plus icon for adding new projects */}
                <span className="bg-white rounded-md p-[0.10rem] ">
                  <PlusIcon className="w-4 h-4 text-[#787486] border border-[#787486] rounded-md" />
                </span>
              </button>
            </div>
            <ul>
              <li className="mb-1 flex items-center group hover:bg-[#5030E514] p-2 rounded-lg">
                <span className="h-2 w-2 bg-[#7AC555] rounded-full inline-block mr-2"></span>
                Mobile App
                <button className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                  {/* Three dots button */}
                  <DotsHorizontalIcon className="w-5 h-5 text-[#0D062D]" />
                </button>
              </li>
              <li className="mb-1 flex items-center group hover:bg-[#5030E514] p-2 rounded-lg">
                <span className="h-2 w-2 bg-[#FFA500] rounded-full inline-block mr-2"></span>
                Website Redesign
                <button className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                  <DotsHorizontalIcon className="w-5 h-5 text-[#0D062D]" />
                </button>
              </li>
              <li className="mb-1 flex items-center group hover:bg-[#5030E514] p-2 rounded-lg">
                <span className="h-2 w-2 bg-[#E4CCFD] rounded-full inline-block mr-2"></span>
                Design System
                <button className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                  <DotsHorizontalIcon className="w-5 h-5 text-[#0D062D]" />
                </button>
              </li>
              <li className="mb-1 flex items-center group hover:bg-[#5030E514] p-2 rounded-lg">
                <span className="h-2 w-2 bg-[#76A5EA] rounded-full inline-block mr-2"></span>
                Wireframes
                <button className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                  <DotsHorizontalIcon className="w-5 h-5 text-[#0D062D]" />
                </button>
              </li>
            </ul>
          </div>
        )}

        {/* Thoughts Time Card */}
        <ThoughtsTimeCard/>
      </div>
    </div>
  );
};

export default Sidebar;

import React from 'react';
import { DotsHorizontalIcon, ChatAltIcon, PaperClipIcon } from '@heroicons/react/outline';

const Task = ({ title, priority, description, assignees, comments, files }) => {
  return (
    <div className="p-4 mb-4 bg-white rounded-lg shadow hover:shadow-lg transition">
      {/* Priority Badge and Three Dots */}
      <div className="flex justify-between items-center mb-2">
        <div
          className={`inline-block px-2 py-1 text-xs rounded ${
            priority === 'High'
              ? 'bg-[#D8727D1A] text-[#D8727D]'
              : 'bg-[#DFA87433] text-[#D58D49]'
          }`}
        >
          {priority}
        </div>

        {/* Three Dots using Heroicons */}
        <DotsHorizontalIcon className="h-5 w-5 text-gray-500 cursor-pointer" />
      </div>

      {/* Task Title */}
      <h3 className="font-bold text-lg mt-2 mb-2">{title}</h3>

      {/* Task Description */}
      <p className="text-sm text-gray-500 mb-4">{description}</p>

      {/* Assignees, Comments, and Files */}
      <div className="flex justify-between items-center">
        {/* Assignees */}
        <div className="flex items-center -space-x-2">
          {assignees.map((assignee, index) => (
            <img
              key={index}
              src={assignee.avatar}
              alt={`Assignee ${index}`}
              className="w-6 h-6 rounded-full border border-gray-300 object-cover"
            />
          ))}
        </div>

        {/* Comments and Files using Heroicons */}
        <div className="flex space-x-4 text-[#787486]">
          <div className="flex items-center space-x-1">
            <ChatAltIcon className="h-5 w-5" />
            <span>{comments} comments</span>
          </div>
          <div className="flex items-center space-x-1">
            <PaperClipIcon className="h-5 w-5" />
            <span>{files} files</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Task;

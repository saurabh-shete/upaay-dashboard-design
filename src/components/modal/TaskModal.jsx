import React, { useState } from 'react';

const TaskModal = ({ isOpen, onClose, onSave }) => {
  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState('Low');
  const [description, setDescription] = useState('');
  const [assignees, setAssignees] = useState([{ name: '', avatar: '' }]);

  if (!isOpen) return null;

  const handleAddAssignee = () => {
    setAssignees([...assignees, { name: '', avatar: '' }]);
  };

  const handleAssigneeChange = (index, field, value) => {
    const updatedAssignees = [...assignees];
    updatedAssignees[index][field] = value;
    setAssignees(updatedAssignees);
  };

  const handleSave = () => {
    const newTask = {
      id: Date.now(), // Generate a unique id
      title,
      priority,
      description,
      assignees,
      comments: 0,
      files: 0,
    };
    onSave(newTask);
    onClose(); // Close the modal after saving
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-md shadow-md w-1/3">
        <h2 className="text-xl font-bold mb-4">Add New Task</h2>

        <label className="block mb-2">Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border rounded-md mb-4"
        />

        <label className="block mb-2">Priority:</label>
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="w-full p-2 border rounded-md mb-4"
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>

        <label className="block mb-2">Description:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 border rounded-md mb-4"
        />

        <label className="block mb-2">Assignees:</label>
        {assignees.map((assignee, index) => (
          <div key={index} className="flex items-center mb-2">
            <input
              type="text"
              placeholder="Name"
              value={assignee.name}
              onChange={(e) => handleAssigneeChange(index, 'name', e.target.value)}
              className="p-2 border rounded-md mr-2"
            />
            <input
              type="text"
              placeholder="Avatar URL"
              value={assignee.avatar}
              onChange={(e) => handleAssigneeChange(index, 'avatar', e.target.value)}
              className="p-2 border rounded-md"
            />
          </div>
        ))}
        <button
          onClick={handleAddAssignee}
          className="bg-blue-500 text-white py-1 px-2 rounded-md"
        >
          Add Assignee
        </button>

        <div className="flex justify-end mt-4">
          <button
            onClick={onClose}
            className="bg-red-500 text-white py-2 px-4 rounded-md mr-2"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="bg-green-500 text-white py-2 px-4 rounded-md"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskModal;

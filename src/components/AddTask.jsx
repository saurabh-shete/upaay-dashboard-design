// src/components/AddTask.jsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/taskSlice';

const AddTask = () => {
  const [task, setTask] = useState('');
  const dispatch = useDispatch();

  const handleAddTask = () => {
    dispatch(addTask({ id: Date.now(), title: task, priority: 'Low' }));
    setTask('');
  };

  return (
    <div>
      <input 
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add new task"
        className="border p-2"
      />
      <button onClick={handleAddTask} className="ml-2 bg-blue-500 text-white p-2 rounded">
        Add Task
      </button>
    </div>
  );
};

export default AddTask;

import React, { useState } from "react";
import TaskCard from "./cards/TaskCard";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useDispatch, useSelector } from "react-redux";
import { addTaskToDo, moveTask } from "../redux/taskSlice";
import { LinkIcon, PlusIcon, ViewBoardsIcon, ViewGridIcon } from "@heroicons/react/solid";
import { CalendarIcon, ChevronDownIcon, FilterIcon, PencilIcon } from "@heroicons/react/outline";
import { ShareIcon } from "@heroicons/react/solid";
import TaskModal from "./modal/TaskModal";

// Priority sorting helper
const priorityRank = {
  High: 3,
  Medium: 2,
  Low: 1,
};

const sortByPriority = (tasks) => {
  return tasks
    .slice()
    .sort((a, b) => priorityRank[b.priority] - priorityRank[a.priority]);
};

const Dashboard = () => {
  const dispatch = useDispatch();
  const { toDo, inProgress, done } = useSelector((state) => state.tasks);
  const [isModalOpen, setModalOpen] = useState(false); // Modal state
  const [filterByPriority, setFilterByPriority] = useState(false); // State to track filtering

  // Event handler to toggle priority filter
  const handleFilterClick = () => {
    setFilterByPriority(!filterByPriority); // Toggle the filtering state
  };

  const onDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) return;
    dispatch(
      moveTask({
        from: source.droppableId,
        to: destination.droppableId,
        taskIndex: source.index,
        destinationIndex: destination.index,
      })
    );
  };

  const handleAddTask = (newTask) => {
    dispatch(addTaskToDo(newTask)); // Dispatch action to add task to "toDo"
  };

  // Decide whether to show sorted or unsorted tasks
  const filteredToDo = filterByPriority ? sortByPriority(toDo) : toDo;
  const filteredInProgress = filterByPriority ? sortByPriority(inProgress) : inProgress;
  const filteredDone = filterByPriority ? sortByPriority(done) : done;

  return (
    <>
      {/* Header Section */}
      <div className="flex justify-between items-center p-6">
        {/* Left side: Mobile App Title + Filter/Today */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center justify-center space-x-2">
            <h1 className="text-4xl text-[#0D062D] font-semibold">Mobile App</h1>
            {/* Icons next to Mobile App */}
            <span className="bg-[#5030E533] rounded-md mt-1 p-[0.10rem]">
              <PencilIcon className="w-4 h-4 text-[#5030E5]" />
            </span>
            <span className="bg-[#5030E533] rounded-md mt-1 p-[0.10rem]">
              <LinkIcon className="w-4 h-4 text-[#5030E5]" />
            </span>
          </div>
        </div>

        {/* Right side: Invite + Circles + Share */}
        <div className="flex items-center space-x-4">
          <span className="flex items-center">
            <span className="bg-[#5030E533] rounded-md p-[0.10rem]">
              <PlusIcon className="w-4 h-4 text-[#5030E5]" />
            </span>
            <button className="text-[#5030E5] px-2 py-1 rounded-full">Invite</button>
          </span>

          {/* Circles */}
          <div className="flex -space-x-2">
            <img
              className="w-8 h-8 rounded-full border-2 border-white object-cover"
              src="src/assets/user1.png"
              alt="User 1"
            />
            <img
              className="w-8 h-8 rounded-full border-2 border-white object-cover"
              src="src/assets/user2.png"
              alt="User 2"
            />
            <img
              className="w-8 h-8 rounded-full border-2 border-white object-cover"
              src="src/assets/user3.png"
              alt="User 3"
            />
            <img
              className="w-8 h-8 rounded-full border-2 border-white object-cover"
              src="src/assets/user4.png"
              alt="User 4"
            />
            <div className="w-8 h-8 rounded-full bg-[#F4D7DA] text-center text-[#D25B68] flex items-center justify-center text-sm text-semibold">
              +2
            </div>
          </div>
        </div>
      </div>

      {/* Second Row: Filter, Calendar, Share, View Mode */}
      <div className="flex justify-between items-center p-6">
        <div className="flex items-center space-x-3">
          {/* Filters */}
          <button
            onClick={handleFilterClick} // Added event listener for filter button
            className="px-2 py-2 text-[#787486] rounded-md border border-[#787486] w-28"
          >
            <span className="flex items-center justify-center space-x-3">
              <FilterIcon className="w-5 h-5 text-[#787486] mr-2" />
              Filter
              <ChevronDownIcon className="w-5 h-5 text-[#787486]" />
            </span>
          </button>
          <button className="text-[#787486] px-2 py-2 rounded-md border border-[#787486] w-28">
            <span className="flex items-center justify-center space-x-2">
              <CalendarIcon className="w-5 h-5 text-[#787486] mr-2" />
              Today
              <ChevronDownIcon className="w-5 h-5 text-[#787486]" />
            </span>
          </button>
        </div>
        <div className="flex items-center justify-center space-x-3">
          {/* Share and View options */}
          <button className="px-3 py-2 text-[#787486] rounded-md border border-[#787486] ">
            <div className="flex justify-between items-center space-x-1">
              <ShareIcon className="w-5 h-5 text-gray-600" />
              <span>Share</span>
            </div>
          </button>
          <span className="border-r border-[#787486]">&nbsp;</span>
          <span className="bg-[#5030E5] rounded-md p-[0.10rem] py-2 px-2">
            <ViewBoardsIcon className="w-5 h-5 text-white rotate-90" />
          </span>
          <span className="rounded-md p-[0.10rem] py-2 px-2">
            <ViewGridIcon className="w-5 h-5 text-[#787486]" />
          </span>
        </div>
      </div>

      {/* Rest of the Drag and Drop context */}
      <div className="px-6">
        <DragDropContext onDragEnd={onDragEnd}>
          <div className="grid grid-cols-3 gap-4">
            {/* To Do Column */}
            <Droppable droppableId="toDo">
              {(provided) => (
                <div
                  className="py-2 px-4 bg-[#F5F5F5] rounded-2xl"
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  <h2 className="text-medium text-[#0D062D] flex items-center justify-between py-4 border-b-[4px] w-full border-[#5030E5] mb-6">
                    <span className="flex items-center space-x-2">
                      <span className="inline-block w-2 h-2 bg-[#5030E5] rounded-full mr-2"></span>
                      To Do
                      <span className="w-5 h-5 bg-[#E0E0E0] text-[#625F6D] text-xs flex items-center justify-center rounded-full">
                        {filteredToDo.length}
                      </span>
                    </span>
                    <button
                      className="bg-[#5030E533] rounded-md p-[0.10rem]"
                      onClick={() => setModalOpen(true)}
                    >
                      <PlusIcon className="w-4 h-4 text-[#5030E5]" />
                    </button>
                  </h2>

                  {/* Render tasks */}
                  {filteredToDo.map((task, index) => (
                    <Draggable key={task.id} draggableId={task.id.toString()} index={index}>
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className={`transition transform duration-200 ${
                            snapshot.isDragging ? "shadow-lg border-2 border-dashed" : "shadow-sm"
                          }`}
                          style={{
                            ...provided.draggableProps.style,
                            backgroundColor: snapshot.isDragging ? "#f0f4ff" : "white",
                            borderRadius: "8px",
                            borderColor: snapshot.isDragging ? "#5030E5" : "transparent",
                          }}
                        >
                          <TaskCard
                            title={task.title}
                            priority={task.priority}
                            description={task.description}
                            assignees={task.assignees}
                            comments={task.comments}
                            files={task.files}
                          />
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>

            {/* To Do Column */}
            <Droppable droppableId="inProgress">
              {(provided) => (
                <div
                  className="py-2 px-4 bg-[#F5F5F5] rounded-2xl"
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  <h2 className="text-medium text-[#0D062D] flex items-center justify-between py-4 border-b-[4px] w-full border-[#FFA500] mb-6">
                    <span className="flex items-center space-x-2">
                      <span className="inline-block w-2 h-2 bg-[#FFA500] rounded-full mr-2"></span>
                      In Progress
                      <span className="w-5 h-5 bg-[#E0E0E0] text-[#625F6D] text-xs flex items-center justify-center rounded-full">
                        {filteredInProgress.length}
                      </span>
                    </span>
                   
                  </h2>

                  {/* Render tasks */}
                  {filteredInProgress.map((task, index) => (
                    <Draggable key={task.id} draggableId={task.id.toString()} index={index}>
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className={`transition transform duration-200 ${
                            snapshot.isDragging ? "shadow-lg border-2 border-dashed" : "shadow-sm"
                          }`}
                          style={{
                            ...provided.draggableProps.style,
                            backgroundColor: snapshot.isDragging ? "#f0f4ff" : "white",
                            borderRadius: "8px",
                            borderColor: snapshot.isDragging ? "#5030E5" : "transparent",
                          }}
                        >
                          <TaskCard
                            title={task.title}
                            priority={task.priority}
                            description={task.description}
                            assignees={task.assignees}
                            comments={task.comments}
                            files={task.files}
                          />
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
            {/* To Do Column */}
            <Droppable droppableId="done">
              {(provided) => (
                <div
                  className="py-2 px-4 bg-[#F5F5F5] rounded-2xl"
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  <h2 className="text-medium text-[#0D062D] flex items-center justify-between py-4 border-b-[4px] w-full border-[#8BC48A] mb-6">
                    <span className="flex items-center space-x-2">
                      <span className="inline-block w-2 h-2 bg-[#8BC48A] rounded-full mr-2"></span>
                      Done
                      <span className="w-5 h-5 bg-[#E0E0E0] text-[#625F6D] text-xs flex items-center justify-center rounded-full">
                        {filteredDone.length}
                      </span>
                    </span>
                   
                  </h2>

                  {/* Render tasks */}
                  {filteredDone.map((task, index) => (
                    <Draggable key={task.id} draggableId={task.id.toString()} index={index}>
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className={`transition transform duration-200 ${
                            snapshot.isDragging ? "shadow-lg border-2 border-dashed" : "shadow-sm"
                          }`}
                          style={{
                            ...provided.draggableProps.style,
                            backgroundColor: snapshot.isDragging ? "#f0f4ff" : "white",
                            borderRadius: "8px",
                            borderColor: snapshot.isDragging ? "#5030E5" : "transparent",
                          }}
                        >
                          <TaskCard
                            title={task.title}
                            priority={task.priority}
                            description={task.description}
                            assignees={task.assignees}
                            comments={task.comments}
                            files={task.files}
                          />
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>

            {/* Repeat similar structure for In Progress and Done columns */}
          </div>
        </DragDropContext>
      </div>

      {/* Task Modal */}
      <TaskModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        onSave={handleAddTask}
      />
    </>
  );
};

export default Dashboard;


# Creative Upaay React JS Assignment

## Project Overview

This project is a dashboard UI built with React.js that replicates a design provided in a Figma file. The application allows for managing tasks across different stages (To Do, In Progress, and Done), and includes features like adding tasks, moving tasks between sections, filtering tasks, and persisting state using Redux and Local Storage.

## Features

1. **UI Implementation**
- The dashboard layout closely replicates the provided Figma design.
- The dashboard contains three sections: "To Do", "In Progress", and "Done" to represent the status of tasks.
2. **Task Management**
- **Add Task**: Users can add tasks with dynamic names and descriptions.
- **Move Task**: Users can drag and drop tasks from one section to another (e.g., "To Do" to "In Progress").
3. **Task Filtering**
- Users can filter tasks based on specific criteria, such as priority, using a filter toggle button.

4. **State Management**
- The application uses Redux for state management, and Local Storage ensures the task data persists across page refreshes.

5. **Drag and Drop**
- Implemented drag-and-drop functionality using `react-beautiful-dnd` to move tasks between sections.

---

## Setup Instructions

To run the project locally using Vite, follow these steps:

1. **Clone the Repository**  
   Clone the GitHub repository to your local machine:

   ```bash
   git clone https://github.com/saurabh-shete/upaay-dashboard-design.git
   ```

2. **Install Dependencies**  
   Navigate to the project directory and install the required dependencies:

   ```bash
   cd creative-upaay-assignment
   npm install
   ```

3. **Start the Application**  
   To start the application on a local development server with Vite:

   ```bash
   npm run dev
   ```

   This will start the React application on `http://localhost:5173`.


---

## Project Structure

```
src/
├── assets/          # Images, icons, and other static assets
├── components/      # Reusable React components (e.g., Task, TaskModal, Cards)
├── redux/           # Redux store, actions, and reducers
├── App.js           # Main application entry point
├── index.js         # React entry point
└── ...
```

---

## State Management (Redux)

The state of the tasks is managed using Redux. The state includes three key arrays: `toDo`, `inProgress`, and `done`. 

### Key Redux Features:
- **Add Task**: Dispatches an action to add a new task to the `toDo` state.
- **Move Task**: Dispatches an action to move a task from one section to another using drag-and-drop.

---

## Local Storage

The application persists its state using Local Storage, so all tasks and their positions remain intact even after a page refresh. This feature is implemented using Redux middleware.

---

## Bonus: Drag and Drop

The application uses `react-beautiful-dnd` for implementing drag-and-drop functionality to move tasks between the three sections (To Do, In Progress, Done).

---

## How to Run the Project Locally

1. **Install Node.js**  
   Ensure you have Node.js installed. You can download it from [here](https://nodejs.org/).

2. **Install Project Dependencies**  
   After cloning the repository, run:

   ```bash
   npm install
   ```

3. **Start the Development Server**  
   Use the following command to start the local development server:

   ```bash
   npm run dev
   ```

4. **View the App**  
   Open `http://localhost:5173` in your browser to view the dashboard.

---

## Assumptions

- The user management (invite, user icons) is hardcoded with mock data for the purpose of UI replication.
- Only task name, description, and priority are dynamically managed in this implementation.

---

## Video Demonstration

You can view a video demonstration of the project here:
[Video Link](https://drive.google.com/file/d/1wrLHIzZh0fXI9bDzpd8FgE5UjrC3BVFg/view?usp=drive_link)


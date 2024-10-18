import { createSlice } from '@reduxjs/toolkit';

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};

const move = (sourceList, destinationList, sourceIndex, destinationIndex) => {
  const sourceClone = Array.from(sourceList);
  const destClone = Array.from(destinationList);
  const [removed] = sourceClone.splice(sourceIndex, 1);
  destClone.splice(destinationIndex, 0, removed);

  return {
    sourceList: sourceClone,
    destinationList: destClone,
  };
};

const taskSlice = createSlice({
  name: 'tasks',
  initialState: {
    toDo: [
      {
        id: 1,
        title: 'Brainstorming',
        priority: 'Low',
        description: "Brainstorming brings team members' diverse experience into play.",
        assignees: [
          { name: 'John', avatar: 'src/assets/user1.png' },
          { name: 'Jane', avatar: 'src/assets/user4.png' },
          { name: 'Doe', avatar: 'src/assets/user3.png' },
        ],
        comments: 12,
        files: 0,
      },
      {
        id: 2,
        title: 'Research',
        priority: 'High',
        description: 'Research phase to gather data and insights.',
        assignees: [
          { name: 'John', avatar: 'src/assets/user1.png' },
          { name: 'Jane', avatar: 'src/assets/user4.png' },
          { name: 'Doe', avatar: 'src/assets/user3.png' },
        ],
        comments: 8,
        files: 2,
      },
    ],
    inProgress: [
      {
        id: 3,
        title: 'Design System',
        priority: 'Low',
        description: 'Developing a reusable design system.',
        assignees: [
          { name: 'John', avatar: 'src/assets/user1.png' },
        ],
        comments: 5,
        files: 1,
      },
      {
        id: 4,
        title: 'Wireframes',
        priority: 'High',
        description: 'Creating wireframes for new features.',
        assignees: [
          { name: 'John', avatar: 'src/assets/user1.png' },
          { name: 'Jane', avatar: 'src/assets/user4.png' },
        ],
        comments: 10,
        files: 3,
      },
    ],
    done: [
      {
        id: 5,
        title: 'Prototype',
        priority: 'Low',
        description: 'Final prototype ready for testing.',
        assignees: [
          { name: 'John', avatar: 'src/assets/user1.png' },
          { name: 'Jane', avatar: 'src/assets/user4.png' },
        ],
        comments: 6,
        files: 4,
      },
    ],
  },
  reducers: {
    moveTask: (state, action) => {
      const { from, to, taskIndex, destinationIndex } = action.payload;
      if (from === to) {
        state[from] = reorder(state[from], taskIndex, destinationIndex);
      } else {
        const result = move(state[from], state[to], taskIndex, destinationIndex);
        state[from] = result.sourceList;
        state[to] = result.destinationList;
      }
    },
    addTaskToDo: (state, action) => {
      state.toDo.push(action.payload); // Add the new task to the 'toDo' array
    },
  },
});

export const { moveTask, addTaskToDo } = taskSlice.actions;
export default taskSlice.reducer;

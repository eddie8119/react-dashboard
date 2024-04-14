import { createContext } from 'react';

interface TaskContextType {
  unitLists: UnitMenuObject[];
}

export const initTaskContext: TaskContextType = {
  unitLists: [
    {
      id: '0',
      unit: '',
    },
  ],
};

const TaskContext = createContext<TaskContextType>(initTaskContext);

export default TaskContext;

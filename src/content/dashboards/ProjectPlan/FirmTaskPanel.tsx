import { FC } from 'react';

import CreatTodo from './CreatTodo';
import TodoListsArea from './TodoListsArea';

interface FirmTaskPanelProps {
  firmTask: {
    id: number;
    name: string;
    taskLists: TaskData[];
  };
  firmId: string;
}

const FirmTaskPanel: FC<FirmTaskPanelProps> = ({ firmTask, firmId }) => {
  return (
    <div
      key={firmTask.id}
      className="flex w-[400px] flex-col gap-6 border border-black p-4  text-black"
    >
      <h1 className="text-center">{firmTask.name}</h1>
      <CreatTodo />
      <TodoListsArea firmTaskLists={firmTask.taskLists} />
    </div>
  );
};

export default FirmTaskPanel;

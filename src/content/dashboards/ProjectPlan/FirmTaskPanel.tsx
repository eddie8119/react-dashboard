import { FC } from 'react';

import CreatTodo from './CreatTodo';
import TodoListsArea from './TodoListsArea';

interface FirmTaskPanelProps {
  firmTask: ThirdPartyData;
}

const FirmTaskPanel: FC<FirmTaskPanelProps> = ({ firmTask }) => {
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

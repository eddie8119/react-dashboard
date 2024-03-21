import { FC } from 'react';

import CreatTodo from './CreatTodo';

interface Task {
  id: number;
  todo: string;
  uint: string;
  quantity: number;
  stock: number;
  cost: number;
  price: number;
}

interface FirmTaskPanelProps {
  firmTask: {
    id: number;
    name: string;
    tasks: Task[];
  };
  firmId: string;
}

const FirmTaskPanel: FC<FirmTaskPanelProps> = ({ firmTask, firmId }) => {
  return (
    <div
      key={firmTask.id}
      className="grid w-[400px] grid-cols-1 gap-2 border border-black p-4  text-black"
    >
      <h1 className="text-center">{firmTask.name}</h1>
      <CreatTodo />
    </div>
  );
};

export default FirmTaskPanel;

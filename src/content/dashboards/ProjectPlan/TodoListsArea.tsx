import { useEffect, useState, FC } from 'react';
import axios from 'axios';

interface TodoListsAreaProps {
  firmTaskLists: {
    id: number;
    todo: string;
    uint: string;
    quantity: number;
    stock: number;
    cost: number;
    price: number;
  }[];
}

const TodoListsArea: FC<TodoListsAreaProps> = ({ firmTaskLists }) => {
  const btnLists = [
    {
      id: 1,
      name: 'edit',
      color: 'bg-blue-600',
      hovercolor: 'bg-blue-700',
      action: '',
    },
    {
      id: 2,
      name: 'delete',
      color: 'bg-red-600',
      hovercolor: 'bg-red-700',
      action: '',
    },
  ];
  useEffect(() => {}, []);

  return (
    <div className="flex flex-col gap-2">
      {firmTaskLists.map((task) => (
        <div key={task.id} className=" flex items-center justify-between">
          <div className="flex gap-4">
            <p>{task.todo}</p>
            <p>
              {task.quantity} {task.uint}
            </p>
          </div>

          <div className="flex gap-2">
            {btnLists.map((btn) => (
              <button
                key={btn.id}
                className={`rounded-md  border border-transparent ${btn.color} px-4 py-2 text-center text-sm font-medium text-white hover:${btn.hovercolor}  focus:ring-2`}
              >
                {btn.name}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoListsArea;

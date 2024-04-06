import { FC } from 'react';
import TodoPanel from './TodoPanel';

interface TodoListsAreaProps {
  firmTaskLists: TaskData[];
  firmTaskId: number;
}

const TodoListsArea: FC<TodoListsAreaProps> = ({
  firmTaskLists,
  firmTaskId,
}) => {
  return (
    <div className="flex w-full flex-col gap-2">
      {firmTaskLists.length !== 0 && (
        <div className=" flex items-center justify-between">
          <div className="flex gap-2">
            <p className="w-[20px]" />
            <p className="w-[90px]">Title</p>
            <p className="w-[70px]">Quantity</p>
            <p className="w-[80px] text-center">Uint</p>
            <p className="w-[120px] text-center">Cost</p>
          </div>
        </div>
      )}
      <div className="flex max-h-[250px] w-full flex-col gap-2 overflow-y-auto">
        {firmTaskLists.map((task, index) => (
          <TodoPanel
            task={task}
            index={index}
            firmTaskId={firmTaskId}
            firmTaskLists={firmTaskLists}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoListsArea;

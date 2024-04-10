import { FC, useState, useEffect } from 'react';
import TodoPanel from './TodoPanel';

interface TodoListsAreaProps {
  firmTaskLists: TaskData[];
  firmTaskId: number;
  firmTaskName: string;
}

const TodoListsArea: FC<TodoListsAreaProps> = ({
  firmTaskLists,
  firmTaskId,
  firmTaskName,
}) => {
  const [firmTotalCost, setFirmTotalCost] = useState<number>(0);

  const handleFirmCostTotal = (): void => {
    const totalCost = firmTaskLists.reduce(
      (sum, item) => sum + item.cost * item.quantity,
      0,
    );
    setFirmTotalCost(totalCost);
  };

  useEffect(() => {
    handleFirmCostTotal();
  }, [firmTaskLists]);

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
      <div className="flex h-[250px] w-full flex-col gap-2 overflow-y-auto">
        {firmTaskLists.map((task, index) => (
          <TodoPanel
            task={task}
            index={index}
            firmTaskId={firmTaskId}
            firmTaskLists={firmTaskLists}
          />
        ))}
      </div>
      <div className="flex w-[412px] justify-end">
        <p>
          {firmTaskName} Cost Total:
          <span className="ml-3">{firmTotalCost}</span>
        </p>
      </div>
    </div>
  );
};

export default TodoListsArea;

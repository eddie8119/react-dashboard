import { FC, useState, useEffect } from 'react';
import TodoPanel from './TodoPanel';
import TodoPanelChart from './TodoPanelChart';

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
        <>
          <table>
            <thead className=" flex items-center gap-2">
              <th className="w-[20px]" />
              <th className="w-[90px] text-center">Title</th>
              <th className="w-[70px]">Quantity</th>
              <th className="w-[80px] text-center">unit</th>
              <th className="w-[120px] text-center">Cost</th>
            </thead>
            <tbody>
              <div className="flex h-[250px] w-full flex-col gap-2 overflow-y-auto">
                {firmTaskLists.map((task, index) => (
                  <TodoPanel
                    key={task.id}
                    task={task}
                    index={index}
                    firmTaskId={firmTaskId}
                    firmTaskLists={firmTaskLists}
                  />
                ))}
              </div>
            </tbody>
          </table>
          <div className="flex w-[412px] justify-end">
            <p>
              {firmTaskName} Cost Total:
              <span className="ml-3">{firmTotalCost}</span>
            </p>
          </div>
          <TodoPanelChart firmTaskLists={firmTaskLists} />
        </>
      )}
    </div>
  );
};

export default TodoListsArea;

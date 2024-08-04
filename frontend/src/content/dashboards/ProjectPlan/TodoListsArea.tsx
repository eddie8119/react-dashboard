import { FC, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation();
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
            <thead>
              <tr className="flex w-full items-center gap-2">
                <th className="w-[4%]" />
                <th className="w-[16%] text-center">
                  {t(`projectPlan.todoListsArea.Title`)}
                </th>
                <th className="w-[12%]">
                  {t(`projectPlan.todoListsArea.Quantity`)}
                </th>
                <th className="w-[15%] text-center">
                  {t(`projectPlan.todoListsArea.Unit`)}
                </th>
                <th className="w-[20%] text-center">
                  {t(`projectPlan.todoListsArea.Cost`)}
                </th>
              </tr>
            </thead>
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
          </table>
          <div className="flex w-[412px] justify-end">
            <p>
              {firmTaskName} {t(`projectPlan.todoListsArea.Cost-Total`)}:
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

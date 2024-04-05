import { useState, lazy, useContext, FC } from 'react';
import ProjectContext from '../../../context/ProjectContext';
import { editProjectThirdParty } from '../../../api/project';
import Input from '@mui/material/Input';
const PopUp = lazy(() => import('../../../components/PopUp'));

interface TodoPanelProps {
  task: TaskData;
  index: number;
  firmTaskId: number;
  firmTaskLists: TaskData[];
}

const TodoPanel: FC<TodoPanelProps> = ({
  task,
  index,
  firmTaskId,
  firmTaskLists,
}) => {
  const { projectInfo, handlerSetUpdateProjectInfo } =
    useContext(ProjectContext);
  const [openDeleteComfirmPop, setOpenDeleteComfirmPop] =
    useState<boolean>(false);

  const handleDeletePopOpen: () => void = () => {
    setOpenDeleteComfirmPop(true);
  };
  const handleDeletePopClose: () => void = () => {
    setOpenDeleteComfirmPop(false);
  };
  const deleteTodo: (id: number) => void = async (id) => {
    const handleFirmTaskLists = firmTaskLists.filter((item) => item.id !== id);

    const updateThirdPartyLists = projectInfo.thirdPartyLists.map((item) => {
      if (item.id === firmTaskId) {
        return {
          ...item,
          taskLists: handleFirmTaskLists,
        };
      }
      return item;
    });

    try {
      await editProjectThirdParty(projectInfo.id, updateThirdPartyLists);
      handlerSetUpdateProjectInfo();
    } catch (error) {
      throw new Error(String(error));
    }
  };

  const btnLists = [
    {
      id: 1,
      name: 'edit',
      color: 'bg-blue-600',
      hovercolor: 'bg-blue-700',
      action: handleDeletePopOpen,
    },
    {
      id: 2,
      name: 'delete',
      color: 'bg-red-600',
      hovercolor: 'bg-red-700',
      action: handleDeletePopOpen,
    },
  ];

  return (
    <div key={task.id} className=" flex items-center justify-between">
      <div className="flex  gap-2">
        <div className="flex w-[20px] items-center">{index + 1}</div>
        <div className="flex w-[90px] items-center">{task.todo}</div>
        <div className="flex w-[60px] items-center justify-center">
          {task.quantity}
        </div>
        <div className="flex w-[60px] items-center justify-center">
          {task.uint}
        </div>
        <Input placeholder="Cost" style={{ width: '100px' }} />
      </div>

      <div className="flex gap-2">
        {btnLists.map((btn) => (
          <button
            onClick={btn.action}
            key={btn.id}
            className={`rounded-md  border border-transparent ${btn.color} px-3 py-2 text-center text-sm font-medium text-white hover:${btn.hovercolor}  focus:ring-2`}
          >
            {btn.name}
          </button>
        ))}
      </div>

      {/* 彈窗 */}
      <PopUp
        openComfirmPop={openDeleteComfirmPop}
        handlePopClose={handleDeletePopClose}
        deleteOnClick={() => deleteTodo(task.id)}
        popupTitle="Delete the task"
        popupIndex={`Are you sure you want to delete ${task.todo}?`}
      />
    </div>
  );
};

export default TodoPanel;

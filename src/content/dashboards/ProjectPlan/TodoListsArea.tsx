import { useState, lazy, useContext, FC } from 'react';
import ProjectContext from '../../../context/ProjectContext';
import { editProjectThirdParty } from '../../../api/project';
const PopUp = lazy(() => import('../../../components/PopUp'));

interface TodoListsAreaProps {
  firmTaskLists: TaskData[];
  firmTaskId: number;
}

const TodoListsArea: FC<TodoListsAreaProps> = ({
  firmTaskLists,
  firmTaskId,
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
    <div className="flex w-full flex-col gap-2">
      {firmTaskLists.length !== 0 && (
        <div className=" flex items-center justify-between">
          <div className="flex gap-2">
            <p className="w-[20px]"></p>
            <p className="w-[90px]">Title</p>
            <p className="w-[60px]">Quantity</p>
            <p className="w-[40px] text-center">Uint</p>
            <p className="w-[40px] text-center">Cost</p>
            <p className="w-[40px] text-center">Price</p>
          </div>
        </div>
      )}
      <div className="flex max-h-[250px] w-full flex-col gap-2 overflow-y-auto">
        {firmTaskLists.map((task, index) => (
          <div key={task.id} className=" flex items-center justify-between">
            <div className="flex gap-2">
              <p className="w-[20px]">{index + 1}</p>
              <p className="w-[90px]">{task.todo}</p>
              <p className="w-[60px] text-center">{task.quantity}</p>
              <p className="w-[40px]">{task.uint}</p>
            </div>

            {/* 彈窗 */}
            <PopUp
              openComfirmPop={openDeleteComfirmPop}
              handlePopClose={handleDeletePopClose}
              deleteOnClick={() => deleteTodo(task.id)}
              popupTitle="Delete the task"
              popupIndex={`Are you sure you want to delete ${task.todo}?`}
            />

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
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoListsArea;

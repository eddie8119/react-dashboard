import { useState, lazy, useContext, FC } from 'react';
import CreatTodo from './CreatTodo';
import TodoListsArea from './TodoListsArea';
import { IconButton } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import ProjectContext from '../../../context/ProjectContext';
import axios from 'axios';
const PopUp = lazy(() => import('../../../components/PopUp'));

interface FirmTaskPanelProps {
  firmTask: ThirdPartyData;
}

const FirmTaskPanel: FC<FirmTaskPanelProps> = ({ firmTask }) => {
  const [openComfirmPop, setOpenComfirmPop] = useState<boolean>(false);
  const { projectInfo, handlerSetUpdateProjectInfo } =
    useContext(ProjectContext);
  const popPropsTitle = firmTask.name;

  const handlePopOpen: () => void = () => {
    setOpenComfirmPop(true);
  };
  const handlePopClose: () => void = () => {
    setOpenComfirmPop(false);
  };
  const deleteTodo: () => void = async () => {
    const handleThirdPartyLists = projectInfo?.thirdPartyLists.filter(
      (item) => item.id !== firmTask.id,
    );

    try {
      await axios.patch(
        `http://localhost:3000/projectLists/${projectInfo?.id}`,
        {
          thirdPartyLists: handleThirdPartyLists,
        },
      );
      setOpenComfirmPop(false);
      handlerSetUpdateProjectInfo();
    } catch (error) {
      throw new Error(String(error));
    }
  };

  return (
    <div
      key={firmTask.id}
      className="flex w-[400px] flex-col gap-6 border border-black p-4  text-black"
    >
      <div className="relative flex items-center justify-center">
        <h1>{firmTask.name}</h1>
        <IconButton
          onClick={handlePopOpen}
          edge="end"
          color="inherit"
          aria-label="close"
          style={{
            position: 'absolute',
            right: '0px',
            top: '0px',
          }}
        >
          <ClearIcon />
        </IconButton>
      </div>

      {/* 彈窗 */}
      <PopUp
        openComfirmPop={openComfirmPop}
        handlePopClose={handlePopClose}
        deleteTodo={deleteTodo}
        popupTitle="Delete the firm"
        popupIndex={`Are you sure delete the ${popPropsTitle} card?`}
      />

      <CreatTodo firmTaskId={firmTask.id} />
      <TodoListsArea firmTaskLists={firmTask.taskLists} />
    </div>
  );
};

export default FirmTaskPanel;

import { useState, lazy, useContext, FC } from 'react';
import CreateTodo from './CreateTodo';
import TodoListsArea from './TodoListsArea';
import { IconButton } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import ProjectContext from '../../../context/ProjectContext';
import { editProjectThirdParty } from '../../../api/project';
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
  const deleteThirdParty: () => void = async () => {
    const handleThirdPartyLists = projectInfo?.thirdPartyLists.filter(
      (item) => item.id !== firmTask.id,
    );

    try {
      await editProjectThirdParty(projectInfo.id, handleThirdPartyLists);
      setOpenComfirmPop(false);
      handlerSetUpdateProjectInfo();
    } catch (error) {
      throw new Error(String(error));
    }
  };

  return (
    <div
      key={firmTask.id}
      className="flex min-w-[550px] flex-col gap-6 border border-black p-4  text-black"
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
        deleteOnClick={deleteThirdParty}
        popupTitle="Delete the firm"
        popupIndex={`Are you sure delete the ${popPropsTitle} card?`}
      />

      <CreateTodo firmTaskId={firmTask.id} />
      <TodoListsArea
        firmTaskId={firmTask.id}
        firmTaskLists={firmTask.taskLists}
      />
    </div>
  );
};

export default FirmTaskPanel;

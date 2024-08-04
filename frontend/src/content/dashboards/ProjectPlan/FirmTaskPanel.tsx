import { lazy, useContext, FC } from 'react';
import CreateTodo from './CreateTodo';
import TodoListsArea from './TodoListsArea';
import { IconButton } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import ProjectContext from '../../../context/ProjectContext';
import usePopup from '../../../hooks/usePopup';
import { editProjectThirdParty } from '../../../api/project';

const PopUp = lazy(() => import('../../../components/PopUp'));

interface FirmTaskPanelProps {
  firmTask: ThirdPartyData;
}

const FirmTaskPanel: FC<FirmTaskPanelProps> = ({ firmTask }) => {
  const { openComfirmPop, handlePopOpen, handlePopClose } = usePopup();
  const { projectInfo, handlerSetUpdateProjectInfo } =
    useContext(ProjectContext);
  const popPropsTitle = firmTask.name;

  const deleteThirdParty = async (): Promise<void> => {
    const handleThirdPartyLists = projectInfo?.thirdPartyLists.filter(
      (item) => item.id !== firmTask.id,
    );

    try {
      await editProjectThirdParty(projectInfo.id, handleThirdPartyLists);
      handlePopClose();
      handlerSetUpdateProjectInfo();
    } catch (error) {
      throw new Error(String(error));
    }
  };

  return (
    <div className="box-border flex min-h-[700px] min-w-[550px] flex-col gap-6 p-4 text-black">
      <div className="relative flex items-center justify-center">
        <header className="text-black">
          <h1>{firmTask.name}</h1>
        </header>
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
        key={firmTask.id}
        firmTaskId={firmTask.id}
        firmTaskLists={firmTask.taskLists}
        firmTaskName={firmTask.name}
      />
    </div>
  );
};

export default FirmTaskPanel;

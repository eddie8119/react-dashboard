import { FC, lazy } from 'react';
import { deleteProject } from '../../api/project';
import { useNavigate } from 'react-router-dom';
import usePopup from '../../hooks/usePopup';
const PopUp = lazy(() => import('../PopUp/index'));

interface PageButtonPanelProps {
  projectId: string;
  projectName: string;
}

const PageButtonPanel: FC<PageButtonPanelProps> = ({
  projectId,
  projectName,
}) => {
  const { openComfirmPop, handlePopOpen, handlePopClose } = usePopup();
  const navigate = useNavigate();

  const removeProject = async (id: string): Promise<void> => {
    try {
      await deleteProject(id);
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };

  const buttonLists = [
    {
      id: 0,
      name: 'remove project',
    },
  ];

  return (
    <>
      {/* 彈窗 */}
      <PopUp
        openComfirmPop={openComfirmPop}
        handlePopClose={handlePopClose}
        deleteOnClick={() => removeProject(projectId)}
        popupTitle="Delete the project"
        popupIndex={`Are you sure delete the ${projectName} project ?`}
      />

      <div className="flex gap-3">
        {buttonLists.map((button) => (
          <button
            onClick={handlePopOpen}
            key={button.id}
            className="btn-danger px-4 py-2"
          >
            {button.name}
          </button>
        ))}
      </div>
    </>
  );
};

export default PageButtonPanel;

import { FC } from 'react';
import { deleteProject } from '../../api/project';
import { useNavigate } from 'react-router-dom';

interface PageButtonPanelProps {
  projectId: string;
}

const PageButtonPanel: FC<PageButtonPanelProps> = ({ projectId }) => {
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
      action: removeProject,
    },
  ];

  return (
    <div className="flex gap-3">
      {buttonLists.map((button) => (
        <button
          onClick={() => button.action(projectId)}
          key={button.id}
          className="rounded-md  border border-transparent bg-red-600 px-4 py-2 text-center text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
        >
          {button.name}
        </button>
      ))}
    </div>
  );
};

export default PageButtonPanel;

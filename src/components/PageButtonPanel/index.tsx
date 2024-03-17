import { FC } from 'react';
import axios from 'axios';

interface PageButtonPanelProps {
  projectId: string;
}

const PageButtonPanel: FC<PageButtonPanelProps> = ({ projectId }) => {
  // const history = useHistory();

  const removeProject = async (id: string) => {
    try {
      await fetch(`http://localhost:3000/projectListsTest/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      // history.push('/');
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

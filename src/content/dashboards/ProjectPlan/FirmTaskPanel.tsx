import { FC } from 'react';

import CreatTodo from './CreatTodo';
import TodoListsArea from './TodoListsArea';
import { IconButton } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';

interface FirmTaskPanelProps {
  firmTask: ThirdPartyData;
}

const FirmTaskPanel: FC<FirmTaskPanelProps> = ({ firmTask }) => {
  return (
    <div
      key={firmTask.id}
      className="flex w-[400px] flex-col gap-6 border border-black p-4  text-black"
    >
      <div className="relative flex items-center justify-center">
        <h1>{firmTask.name}</h1>
        <IconButton
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

      <CreatTodo />
      <TodoListsArea firmTaskLists={firmTask.taskLists} />
    </div>
  );
};

export default FirmTaskPanel;

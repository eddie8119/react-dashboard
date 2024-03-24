import { useState } from 'react';
import ProjectListPanel from '../../../components/ProjectListPanel';
import ProjectSelect from '../../../components/ProjectSelect';
import PageTitle from './../../../components/PageTitle';
import CreateProject from './CreateProject';
import { ProjectListProvider } from '../../../context/ProjectListContext';
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
} from '@mui/material';

import ClearIcon from '@mui/icons-material/Clear';

const OverviewCase = () => {
  const [openCreateProject, setOpenCreateProject] = useState<boolean>(false);

  const handleCreateProjectOpen: () => void = () => {
    setOpenCreateProject(true);
  };

  const handleCreateProjectClose: () => void = () => {
    setOpenCreateProject(false);
  };

  return (
    <ProjectListProvider>
      <div className="flex h-full w-full flex-col gap-6 p-6">
        <PageTitle title="Project List" />
        <Button
          variant="contained"
          style={{ width: '200px' }}
          onClick={handleCreateProjectOpen}
        >
          Create Project
        </Button>

        {/* 彈窗 */}
        <Dialog
          open={openCreateProject}
          onClose={handleCreateProjectClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle>
            Create Project{' '}
            <IconButton
              edge="end"
              color="inherit"
              onClick={handleCreateProjectClose}
              aria-label="close"
              style={{ position: 'absolute', right: '20px', top: '10px' }}
            >
              <ClearIcon />
            </IconButton>
          </DialogTitle>

          <DialogContent>
            <CreateProject
              handleCreateProjectClose={handleCreateProjectClose}
            />
          </DialogContent>
        </Dialog>

        <ProjectSelect />
        <ProjectListPanel />
      </div>
    </ProjectListProvider>
  );
};

export default OverviewCase;

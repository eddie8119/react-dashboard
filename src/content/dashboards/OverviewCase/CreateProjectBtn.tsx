import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import CreateProject from './CreateProject';
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
} from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
const CreateProjectBtn = () => {
  const { t } = useTranslation();
  const [openCreateProject, setOpenCreateProject] = useState<boolean>(false);
  const handleCreateProjectOpen: () => void = () => {
    setOpenCreateProject(true);
  };
  const handleCreateProjectClose: () => void = () => {
    setOpenCreateProject(false);
  };
  return (
    <>
      <Button
        variant="contained"
        style={{ width: '200px' }}
        onClick={handleCreateProjectOpen}
        data-testid="create-project-btn"
      >
        {t(`overviewCase.createProject.Create-Project`)}
      </Button>
      {/* 彈窗 */}
      <Dialog
        open={openCreateProject}
        onClose={handleCreateProjectClose}
        aria-labelledby="form-dialog-title"
        data-testid="create-project-dialog"
      >
        <DialogTitle>
          {t(`overviewCase.createProject.Create-Project`)}
          <IconButton
            edge="end"
            color="inherit"
            onClick={handleCreateProjectClose}
            aria-label="close"
            data-testid="close-create-project-dialog"
            style={{ position: 'absolute', right: '20px', top: '10px' }}
          >
            <ClearIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <CreateProject handleCreateProjectClose={handleCreateProjectClose} />
        </DialogContent>
      </Dialog>
    </>
  );
};
export default CreateProjectBtn;

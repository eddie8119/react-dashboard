import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProjectContext, {
  initProjectContext,
} from '../../../context/ProjectContext';

import PageTitle from './../../../components/PageTitle';
import PageButtonPanel from './../../../components/PageButtonPanel';
import EditProjectInfo from './EditProjectInfo';
import ChoseFirm from '../../../components/ChoseFirm';
import CreateFirmTask from './CreateFirmTask';
import { getProject } from '../../../api/project';

const ProjectPlan = () => {
  const { id = '' }: { id?: string } = useParams();
  const [projectInfo, setProjectInfo] = useState<ProjectData>(
    initProjectContext.projectInfo,
  );
  const [updateProjectInfo, setUpdateProjectInfo] = useState<boolean>(false);

  const handlerSetUpdateProjectInfo = () => {
    setUpdateProjectInfo((prev) => !prev);
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await getProject(id);
      const project = response.data;
      setProjectInfo(project);
    };
    fetchData();
  }, [id, updateProjectInfo]);

  return (
    <ProjectContext.Provider
      value={{ projectInfo, handlerSetUpdateProjectInfo }}
    >
      <div className="flex h-full w-full flex-col gap-6 p-6">
        <div className="flex justify-between">
          <PageTitle title={`專案名稱: ${projectInfo.name}`} />
          <PageButtonPanel projectId={id} />
        </div>
        <EditProjectInfo projectId={id} />
        <ChoseFirm />
        <CreateFirmTask />
      </div>
    </ProjectContext.Provider>
  );
};

export default ProjectPlan;

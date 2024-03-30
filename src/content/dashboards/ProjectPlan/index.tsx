import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PageTitle from './../../../components/PageTitle';
import PageButtonPanel from './../../../components/PageButtonPanel';
import EditProjectInfo from './EditProjectInfo';
import ChoseFirm from '../../../components/ChoseFirm';
import CreateFirmTask from './CreateFirmTask';
import axios from 'axios';

const ProjectPlan = () => {
  const { id = '' }: { id?: string } = useParams();
  const [projectInfo, setProjectInfo] = useState<ProjectData>();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `http://localhost:3000/projectLists/${id}`,
      );
      const project = response.data;
      setProjectInfo(project);
    };
    fetchData();
  }, [id]);
  return (
    <div className="flex h-full w-full flex-col gap-6 p-6">
      <div className="flex justify-between">
        <PageTitle title={`專案名稱: ${id}`} />
        <PageButtonPanel projectId={id} />
      </div>
      <EditProjectInfo projectInfo={projectInfo} projectId={id} />

      <ChoseFirm />
      <CreateFirmTask projectId={id} />
    </div>
  );
};

export default ProjectPlan;

import { useEffect, useState } from 'react';
import ProjectListPanel from '../../../components/ProjectListPanel';
import ProjectSelect from '../../../components/ProjectSelect';
import CreateProjectBtn from './CreateProjectBtn';
import OverviewDashboard from './OverviewDashboard';
import { ProjectListProvider } from '../../../context/ProjectListContext';
import { getProjectTypeLists } from '../../../api/project';

const OverviewCase = () => {
  const [projectTypeLists, setProjectTypeLists] = useState<ProjectTypeObject[]>(
    [],
  );
  useEffect(() => {
    const fetchData = async () => {
      const response = await getProjectTypeLists();
      setProjectTypeLists(response.data);
    };
    fetchData();
  }, []);
  return (
    <ProjectListProvider>
      <main className="outlat-container">
        <OverviewDashboard />
        <CreateProjectBtn />
        <ProjectSelect projectTypeLists={projectTypeLists} />
        <ProjectListPanel />
      </main>
    </ProjectListProvider>
  );
};
export default OverviewCase;

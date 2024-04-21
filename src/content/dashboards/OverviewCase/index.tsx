import ProjectListPanel from '../../../components/ProjectListPanel';
import ProjectSelect from '../../../components/ProjectSelect';
import CreateProjectBtn from './CreateProjectBtn';
import OverviewDashboard from './OverviewDashboard';
import { ProjectListProvider } from '../../../context/ProjectListContext';

const OverviewCase = () => {
  return (
    <ProjectListProvider>
      <main className="outlat-container">
        <OverviewDashboard />
        <CreateProjectBtn />
        <ProjectSelect />
        <ProjectListPanel />
      </main>
    </ProjectListProvider>
  );
};

export default OverviewCase;

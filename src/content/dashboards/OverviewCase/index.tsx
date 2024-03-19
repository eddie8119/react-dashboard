import ProjectListPanel from '../../../components/ProjectListPanel';
import ProjectSelect from '../../../components/ProjectSelect';
import PageTitle from './../../../components/PageTitle';
import CreateProject from './CreateProject';
import { ProjectListProvider } from '../../../context/ProjectListContext';

const OverviewCase = () => {
  return (
    <ProjectListProvider>
      <div className="flex h-full w-full flex-col gap-6 p-6">
        <PageTitle title="Project List" />
        <CreateProject />
        <ProjectSelect />
        <ProjectListPanel />
      </div>
    </ProjectListProvider>
  );
};

export default OverviewCase;

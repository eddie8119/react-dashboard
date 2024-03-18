import ProjectListPanel from '../../../components/ProjectListPanel';
import ProjectSelect from '../../../components/ProjectSelect';
import PageTitle from './../../../components/PageTitle';
import CreateProject from './CreateProject';

const OverviewCase = () => {
  return (
    <div className="flex h-full w-full flex-col gap-6 p-6">
      <PageTitle title="Project List" />
      <CreateProject />
      <ProjectSelect />
      {/* <ProjectListPanel dataSource={projectListsdata} /> */}
    </div>
  );
};

export default OverviewCase;

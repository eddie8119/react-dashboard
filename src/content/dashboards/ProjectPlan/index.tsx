import { useParams } from 'react-router-dom';
import PageTitle from './../../../components/PageTitle';
import PageButtonPanel from './../../../components/PageButtonPanel';
import ChoseFirm from '../../../components/ChoseFirm';

const ProjectPlan = () => {
  const { id } = useParams();

  return (
    <div className="flex h-full w-full flex-col gap-6 p-6">
      <div className="flex justify-between">
        <PageTitle title={`專案名稱: ${id}`} />
        <PageButtonPanel projectId={id} />
      </div>

      <p>建立工程種類</p>
      <ChoseFirm />
    </div>
  );
};

export default ProjectPlan;

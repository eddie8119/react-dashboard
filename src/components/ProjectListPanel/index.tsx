import { Link } from 'react-router-dom';
import { useProjectList } from '../../context/ProjectListContext';

interface ProjectData {
  id: number;
  name: string;
  status: string;
  date: string;
  picture?: string;
  fileNumber: string;
  cost: number;
  category: string;
}

const ProjectListPanel = () => {
  const { projectListsdata }: { projectListsdata: ProjectData[] } =
    useProjectList();

  const buttonLists = [
    { id: 1, name: 'budjet', link: '/plan/project' },
    { id: 2, name: 'construction', link: '/construction/project' },
    { id: 3, name: 'profit', link: '/closeout/project' },
  ];

  return (
    <div className="grid w-full grid-cols-1 gap-3 md:grid-cols-3 ">
      {projectListsdata.map((data) => (
        <div
          key={data.id}
          className="flex h-[140px]  items-center justify-between bg-box-bg px-[30px]"
        >
          <div className="flex w-full justify-between">
            <div className="flex flex-col ">
              <p className="text font-bold text-gray">
                {data.fileNumber}-({data.category})
              </p>
              <p className="text text-primary">{data.name}</p>
              <p className="text text-primary">{data.status}</p>
              <p className="text text-primary">{data.date}</p>
              <p className="text text-primary">cost: {data.cost}</p>
            </div>
            <div className="flex flex-col gap-2 ">
              {buttonLists.map((button) => (
                <Link
                  key={button.id}
                  to={`${button.link}/${data.id}`}
                  className="rounded bg-blue-500 px-2 py-1 text-center text-white hover:bg-blue-700"
                >
                  {button.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectListPanel;

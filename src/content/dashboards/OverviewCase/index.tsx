import PageTitle from "./../../../components/PageTitle";
import CreateProject from "./CreateProject";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

interface ProjectList {
  id: number;
  name: string;
  status: string;
  date: string;
  picture?: string;
  number: string;
}

const projectListsTest: ProjectList[] = [
  {
    id: 0,
    name: "Project 1",
    status: "Progress",
    date: "2021-09-01",
    picture: " ",
    number: "001",
  },
  {
    id: 1,
    name: "Project 2",
    status: "Completed",
    date: "2021-09-05",
    picture: " ",
    number: "002",
  },
  {
    id: 2,
    name: "Project 3",
    status: "Pending",
    date: "2021-09-10",
    picture: " ",
    number: "003",
  },
  {
    id: 3,
    name: "Project 4",
    status: "Pending",
    date: "2021-09-10",
    picture: " ",
    number: "004",
  },
];

const OverviewCase = () => {
  const [projectLists, setProjectLists] = useState<ProjectList[]>([]);

  useEffect(() => {
    setProjectLists(projectListsTest);
  }, []);

  const handleSubmitAddProject = (name: string, number: string) => {
    const newProject: ProjectList = {
      id: Date.now(),
      name,
      status: "Progress",
      date: new Date().toISOString(),
      picture: "",
      number,
    };

    setProjectLists((prevProjectLists) => [...prevProjectLists, newProject]);
  };

  return (
    <div className="w-full h-full flex flex-col gap-6 p-6">
      <PageTitle title="目前專案列表" />
      <CreateProject handleSubmitAddProject={handleSubmitAddProject} />
      <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-3 ">
        {projectLists.map((data) => (
          <div
            key={data.id}
            className="flex h-[140px]  items-center justify-between bg-box-bg px-[30px]"
          >
            <div className="w-full flex justify-between">
              <div className="flex flex-col ">
                <p className="text font-bold text-gray">{data.number}</p>
                <p className="text text-primary">{data.name}</p>
                <p className="text text-primary">{data.status}</p>
                <p className="text text-primary">{data.date}</p>
              </div>
              <div className="flex flex-col gap-2 ">
                <Link
                  to={`/plan/project/${data.id}`}
                  className=" px-2 py-1 text-white bg-blue-500 rounded hover:bg-blue-700"
                >
                  預算
                </Link>
                <Link
                  to={`/construction/project/${data.id}`}
                  className=" px-2 py-1 text-white bg-blue-500 rounded hover:bg-blue-700"
                >
                  工程
                </Link>
                <Link
                  to={`/closeout/project/${data.id}`}
                  className=" px-2 py-1 text-white bg-blue-500 rounded hover:bg-blue-700"
                >
                  利潤
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OverviewCase;

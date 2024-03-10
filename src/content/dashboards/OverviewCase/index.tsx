import PageTitle from "./../../../components/PageTitle";

interface ProjectList {
  id: number;
  name: string;
  status: string;
  date: string;
  picture?: string;
  number: string;
}

const projectLists: ProjectList[] = [
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
  return (
    <div className="w-full h-full flex flex-col gap-6 p-6">
      <PageTitle title="目前專案列表" />
      <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-3 ">
        {projectLists.map((data) => (
          <div
            key={data.id}
            className="flex h-[140px]  items-center justify-between bg-box-bg px-[30px]"
          >
            <div className="flex flex-col ">
              <p className="text font-bold text-gray">{data.number}</p>
              <p className="text text-primary">{data.name}</p>
              <p className="text text-primary">{data.status}</p>
              <p className="text text-primary">{data.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OverviewCase;

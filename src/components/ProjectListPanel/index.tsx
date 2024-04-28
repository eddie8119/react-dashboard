import { useContext, ChangeEvent } from 'react';
import { Link } from 'react-router-dom';
import { ProjectListContext } from '../../context/ProjectListContext';
import useDateHandler from '../../hooks/useDateHandler';
import Pagination from '@mui/material/Pagination';

const ProjectListPanel = () => {
  const { projectListsdata, handleChangePagination } =
    useContext(ProjectListContext);

  //(event, value) 參數一定要這樣帶
  const handlePageChange = (
    event: ChangeEvent<unknown>,
    value: number,
  ): void => {
    handleChangePagination(value);
  };
  const buttonLists = [
    { id: 1, name: 'plan', link: '/plan/project' },
    { id: 2, name: 'construction', link: '/construction/project' },
    { id: 3, name: 'profit', link: '/closeout/project' },
  ];

  return (
    <div className="container-box flex h-[400px] w-full flex-col ">
      <Pagination
        count={5}
        variant="outlined"
        color="primary"
        onChange={(event, value) => {
          handlePageChange(event, value);
        }}
      />
      <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
        {projectListsdata.map((data) => (
          <div
            key={data.id}
            className="container-box flex h-[150px] items-center justify-between bg-box-bg px-[30px]"
          >
            <div className="flex w-full items-center justify-between">
              <div className="flex flex-col ">
                <p className="text font-bold text-gray">
                  {data.fileNumber}-({data.category})
                </p>
                <p className="text text-primary">{data.name}</p>
                <p className="text text-primary">{data.status}</p>
                <p className="text text-primary">{useDateHandler(data.date)}</p>
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
    </div>
  );
};

export default ProjectListPanel;

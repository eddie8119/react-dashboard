import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { MenuItem, InputLabel, FormControl, Select } from '@mui/material';

import PageTitle from './../../../components/PageTitle';
import CreateProject from './CreateProject';

interface ProjectList {
  id: number;
  name: string;
  status: string;
  date: string;
  picture?: string;
  fileNumber: string;
  cost: number;
  category: string;
}

const OverviewCase = () => {
  const [projectLists, setProjectLists] = useState<ProjectList[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        'http://localhost:3000/projectListsTest',
      );

      setProjectLists(response.data);
    };
    fetchData();
  }, []);

  const buttonLists = [
    { id: 1, name: 'budjet', link: '/plan/project' },
    { id: 2, name: 'construction', link: '/construction/project' },
    { id: 3, name: 'profit', link: '/closeout/project' },
  ];

  return (
    <div className="flex h-full w-full flex-col gap-6 p-6">
      <PageTitle title="Project List" />
      <CreateProject />
      <div className="flex items-center">
        <p className="text-black">Projeect Select</p>
        <FormControl sx={{ m: 1, width: 150 }}>
          <InputLabel id="demo-simple-select-label">category</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="category"
            value="House"
          >
            <MenuItem value="House">House</MenuItem>
            <MenuItem value="Mansion">Mansion</MenuItem>
            <MenuItem value="Commercial">Commercial</MenuItem>
            <MenuItem value="Office">Office</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className="grid w-full grid-cols-1 gap-3 md:grid-cols-3 ">
        {projectLists.map((data) => (
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
    </div>
  );
};

export default OverviewCase;

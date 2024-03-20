import { useEffect, useState } from 'react';
import axios from 'axios';

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

const useProjectListsQuery = (params) => {
  const { variables } = params;
  const { filter, pagination, sort } = variables;

  const [projectLists, setProjectLists] = useState<ProjectList[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('http://localhost:3000/projectLists');

      setProjectLists(response.data);
    };
    fetchData();
  }, []);

  const projectListsHandle = projectLists
    .filter((project) => {
      return project.name.indexOf(filter.keyword) !== -1;
    })
    .filter((project) => {
      if (filter.category !== 'All') {
        return project.category === filter.category;
      }
      return true;
    });

  return {
    projectListsdata: projectListsHandle.slice(
      (pagination.current - 1) * pagination.pageSize,
      (pagination.current - 1) * pagination.pageSize + pagination.pageSize,
    ),
  };
};

export default useProjectListsQuery;

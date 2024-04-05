import { useEffect, useState } from 'react';
import { getProjectLists } from '../api/project';

const useProjectListsQuery = (params) => {
  const { variables } = params;
  const { filter, pagination, sort } = variables;

  const [projectLists, setProjectLists] = useState<ProjectData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getProjectLists();
      setProjectLists(response.data);
    };
    fetchData();
  }, [variables]);

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

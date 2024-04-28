import { useEffect, useState } from 'react';
import { getProjectLists } from '../api/project';
import { IntState } from '../reducers/projectFilterReducer';

const useProjectListsQuery = (variables: IntState) => {
  const { filter, pagination } = variables;
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
  if (filter.costSort === 'ascending')
    projectListsHandle.sort((a, b) => a.cost - b.cost);
  if (filter.costSort === 'descending')
    projectListsHandle.sort((a, b) => b.cost - a.cost);

  return {
    projectListsdata: projectListsHandle.slice(
      (pagination.current - 1) * pagination.pageSize,
      (pagination.current - 1) * pagination.pageSize + pagination.pageSize,
    ),
  };
};

export default useProjectListsQuery;

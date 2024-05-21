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

  const filteredProjectLists = projectLists
    .filter((project) => {
      return project.name.indexOf(filter.keyword) !== -1;
    })
    .filter((project) => {
      if (filter.category !== 'All') {
        return project.category === filter.category;
      }
      return true;
    });

  let sortedProjectLists = [...filteredProjectLists];

  if (filter.costSort === 'ascending') {
    sortedProjectLists.sort((a, b) => a.cost - b.cost);
  }

  if (filter.costSort === 'descending') {
    sortedProjectLists.sort((a, b) => b.cost - a.cost);
  }

  const paginatedProjectLists = sortedProjectLists.slice(
    (pagination.current - 1) * pagination.pageSize,
    (pagination.current - 1) * pagination.pageSize + pagination.pageSize,
  );

  return {
    projectListsdata: paginatedProjectLists,
  };
};

export default useProjectListsQuery;

import { useReducer, ChangeEvent } from 'react';
import useProjectListsQuery from '../../../hooks/useProjectListsQuery';

import projectFilterReducer from '../../../reducers/projectFilterReducer';
import ProjectListPanel from '../../../components/ProjectListPanel';

import {
  MenuItem,
  InputLabel,
  FormControl,
  Select,
  TextField,
} from '@mui/material';

import PageTitle from './../../../components/PageTitle';
import CreateProject from './CreateProject';

const OverviewCase = () => {
  const DEFAULT_PAGINATION = {
    current: 1,
    pageSize: 6,
    showSizeChanger: true,
    pageSizeOptions: [3, 6, 8],
  };

  const INITIAL_STATE = {
    filter: { keyword: '', category: 'All' },
    pagination: DEFAULT_PAGINATION,
  };

  const [variables, dispatch] = useReducer(projectFilterReducer, INITIAL_STATE);
  const { projectListsdata } = useProjectListsQuery({ variables });

  const handleChangeCategory = (event: ChangeEvent<{ value: string }>) => {
    dispatch({
      type: 'CHANGE_CATEGORY',
      payload: { category: event.target.value },
    });
  };

  const handleChangeKeyword = (event: ChangeEvent<{ value: string }>) => {
    dispatch({
      type: 'CHANGE_KEYWORD',
      payload: { keyword: event.target.value },
    });
  };

  return (
    <div className="flex h-full w-full flex-col gap-6 p-6">
      <PageTitle title="Project List" />
      <CreateProject />
      {/* project select area */}
      <div className="flex items-center">
        <p className="text-black">Projeect Select</p>
        <FormControl sx={{ m: 1, width: 150 }}>
          <InputLabel id="demo-simple-select-label">category</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="category"
            value={variables.filter.category}
            onChange={handleChangeCategory}
          >
            <MenuItem value="All">All</MenuItem>
            <MenuItem value="House">House</MenuItem>
            <MenuItem value="Mansion">Mansion</MenuItem>
            <MenuItem value="Commercial">Commercial</MenuItem>
            <MenuItem value="Office">Office</MenuItem>
          </Select>
        </FormControl>
        <TextField
          label="search name"
          type="text"
          value={variables.filter.keyword}
          onChange={handleChangeKeyword}
        />
      </div>
      <ProjectListPanel dataSource={projectListsdata} />
    </div>
  );
};

export default OverviewCase;

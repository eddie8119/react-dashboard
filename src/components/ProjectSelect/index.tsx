import { ChangeEvent } from 'react';
import { useProjectList } from '../../context/ProjectListContext';

import {
  MenuItem,
  InputLabel,
  FormControl,
  Select,
  TextField,
} from '@mui/material';

const ProjectSelect = () => {
  const { variables, handleChangeCategory, handleChangeKeyword } =
    useProjectList();

  const changeCategory = (event: ChangeEvent<{ value: string }>) => {
    handleChangeCategory(event.target.value);
  };
  const changeKeyword = (event: ChangeEvent<{ value: string }>) => {
    handleChangeKeyword(event.target.value);
  };

  return (
    <div className="flex items-center">
      <p className="text-black">Projeect Select</p>
      <FormControl sx={{ m: 1, width: 150 }}>
        <InputLabel id="demo-simple-select-label">category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="category"
          value={variables.filter.category}
          onChange={changeCategory}
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
        onChange={changeKeyword}
      />
    </div>
  );
};

export default ProjectSelect;

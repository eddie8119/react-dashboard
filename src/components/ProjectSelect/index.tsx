import { ChangeEvent } from 'react';
import { SelectChangeEvent } from '@mui/material';
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

  const changeCategory = (event: SelectChangeEvent<string>): void => {
    handleChangeCategory(event.target.value);
  };
  const changeKeyword = (event: ChangeEvent<{ value: string }>): void => {
    handleChangeKeyword(event.target.value);
  };

  return (
    <section className="flex items-center">
      <header className="text-black">
        <h1>Projeect Select</h1>
      </header>
      <FormControl sx={{ m: 1, width: 150 }}>
        <InputLabel id="demo-simple-select-label">category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="category"
          value={variables.filter.category}
          onChange={(event) => changeCategory(event)}
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
        onChange={(event) => changeKeyword(event)}
      />
    </section>
  );
};

export default ProjectSelect;

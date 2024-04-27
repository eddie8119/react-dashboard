import { ChangeEvent, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { SelectChangeEvent } from '@mui/material';
import { ProjectListContext } from '../../context/ProjectListContext';
import {
  MenuItem,
  InputLabel,
  FormControl,
  Select,
  TextField,
} from '@mui/material';
const ProjectSelect = ({
  projectTypeLists,
}: {
  projectTypeLists: ProjectTypeObject[];
}) => {
  const { t } = useTranslation();
  const { variables, handleChangeCategory, handleChangeKeyword } =
    useContext(ProjectListContext);

  const changeCategory = (event: SelectChangeEvent<string>): void => {
    handleChangeCategory(event.target.value);
  };
  const changeKeyword = (event: ChangeEvent<{ value: string }>): void => {
    handleChangeKeyword(event.target.value);
  };
  return (
    <section className="flex items-center">
      <header className="text-black">
        <h1>{t(`overviewCase.projectSelect.Projeect-Select`)}</h1>
      </header>
      <FormControl sx={{ m: 1, width: 150 }}>
        <InputLabel id="demo-simple-select-label">
          {t('input-label.Category')}
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="category"
          value={variables.filter.category}
          onChange={(event) => changeCategory(event)}
        >
          <MenuItem value="All">{t('selection.project-select.All')}</MenuItem>
          {projectTypeLists.map((item) => (
            <MenuItem key={item.id} value={item.name}>
              {t(`selection.project-select.${item.name}`)}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <TextField
        label={t('input-label.Search-Name')}
        type="text"
        value={variables.filter.keyword}
        onChange={(event) => changeKeyword(event)}
      />
    </section>
  );
};
export default ProjectSelect;

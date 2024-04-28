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
  Grid,
} from '@mui/material';

const ProjectSelect = ({
  projectTypeLists,
}: {
  projectTypeLists: ProjectTypeObject[];
}) => {
  const { t } = useTranslation();
  const {
    variables,
    handleChangeCategory,
    handleChangeKeyword,
    handleChangeCostSort,
  } = useContext(ProjectListContext);

  const changeCategory = (event: SelectChangeEvent<string>): void => {
    handleChangeCategory(event.target.value);
  };
  const changeKeyword = (event: ChangeEvent<{ value: string }>): void => {
    handleChangeKeyword(event.target.value);
  };
  const changeCostSort = (event: SelectChangeEvent<string>): void => {
    handleChangeCostSort(event.target.value);
  };
  return (
    <Grid container spacing={1} alignItems="center">
      <header className="text-black">
        <h1>{t(`overviewCase.projectSelect.Projeect-Select`)}</h1>
      </header>

      <Grid item>
        <FormControl sx={{ width: 150 }}>
          <InputLabel id="category-select-label">
            {t('input-label.Category')}
          </InputLabel>
          <Select
            labelId="category-select-label"
            id="category-select"
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
      </Grid>
      <Grid item>
        <FormControl sx={{ width: 120 }}>
          <InputLabel id="cost-order-select-label">
            {t('input-label.Cost-Order')}
          </InputLabel>
          <Select
            labelId="cost-order-select-label"
            id="cost-order-select"
            label="Cost"
            value={variables.filter.costSort}
            onChange={(event) => changeCostSort(event)}
          >
            <MenuItem value="">
              {t('selection.project-select.No-Order')}
            </MenuItem>
            <MenuItem value="ascending">
              {t('selection.project-select.Ascending-Order')}
            </MenuItem>
            <MenuItem value="descending">
              {t('selection.project-select.Descending-Order')}
            </MenuItem>
          </Select>
        </FormControl>{' '}
      </Grid>
      <Grid item>
        {' '}
        <TextField
          label={t('input-label.Search-Name')}
          type="text"
          value={variables.filter.keyword}
          onChange={(event) => changeKeyword(event)}
        />
      </Grid>
    </Grid>
  );
};
export default ProjectSelect;

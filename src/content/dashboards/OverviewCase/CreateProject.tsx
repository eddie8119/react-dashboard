import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { updateProject, getProjectTypeLists } from '../../../api/project';
import { useProjectList } from '../../../context/ProjectListContext';
import {
  TextField,
  Stack,
  Button,
  MenuItem,
  InputLabel,
  FormControl,
  Select,
  FormHelperText,
} from '@mui/material';
interface FormValues {
  name: string;
  fileNumber: string;
  category: string;
}
const CreateProject = ({
  handleCreateProjectClose,
}: {
  handleCreateProjectClose: () => void;
}) => {
  const { t } = useTranslation();
  const [projectTypeLists, setProjectTypeLists] = useState<ProjectTypeObject[]>(
    [],
  );
  const form = useForm<FormValues>({
    defaultValues: {
      name: '',
      fileNumber: '',
      category: '',
    },
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;
  const {
    handleChangeCategory,
  }: { handleChangeCategory: (data: string) => void } = useProjectList();
  const initProjectList = () => {
    handleChangeCategory('All');
  };
  const onSubmit = async (data: FormValues) => {
    const { name, fileNumber, category } = data;
    const formData: ProjectData = {
      id: Date.now().toString(),
      name,
      status: 'Progress',
      date: new Date().toISOString(),
      picture: '',
      fileNumber,
      cost: 0,
      sellingPrice: 0,
      category,
      thirdPartyLists: [],
    };
    try {
      await updateProject(formData);
      form.reset();
      form.setValue('category', '');
      initProjectList(); // 觸發刷新ProjectList
      handleCreateProjectClose();
    } catch (error) {
      throw new Error(String(error));
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      const response = await getProjectTypeLists();
      setProjectTypeLists(response.data);
    };
    fetchData();
  }, []);
  return (
    <form noValidate onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={2} width={400} className="box-border p-5">
        <TextField
          label={t('input-label.Name')}
          type="text"
          {...register('name', {
            required: t('input-sign.nameRequired'),
            validate: (value) =>
              value.trim() !== '' || t('input-sign.whitespaceSign'),
          })}
          error={!!errors.name}
          helperText={errors.name?.message}
        />
        <TextField
          label={t('input-label.FileNumber')}
          type="text"
          {...register('fileNumber', {
            required: t('input-sign.fileNumberRequired'),
            validate: (value) =>
              value.trim() !== '' || t('input-sign.whitespaceSign'),
          })}
          error={!!errors.fileNumber}
          helperText={errors.fileNumber?.message}
        />
        <FormControl fullWidth error={!!errors.category}>
          <InputLabel id="type-select-label">
            {t('input-label.Category')}
          </InputLabel>
          <Select
            labelId="type-select-label"
            id="type-select"
            label="Category"
            value={form.watch('category')}
            {...register('category', {
              required: t('input-sign.fileNumberRequired'),
            })}
            error={!!errors.category}
          >
            {projectTypeLists.map((item) => (
              <MenuItem key={item.id} value={item.name}>
                {t(`selection.project-select.${item.name}`)}
              </MenuItem>
            ))}
          </Select>
          {errors.category && (
            <FormHelperText>{errors.category.message}</FormHelperText>
          )}
        </FormControl>
        <Button type="submit" variant="contained">
          {t(`overviewCase.createProject.Create-Project`)}
        </Button>
      </Stack>
    </form>
  );
};
export default CreateProject;

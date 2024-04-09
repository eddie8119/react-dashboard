import { useEffect, useState } from 'react';
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
  const [projectTypeLists, setProjectTypeLists] = useState<ProjectTypeList[]>(
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
      date: new Date().toString(),
      picture: '',
      fileNumber,
      cost: 0,
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
    <>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <Stack
          spacing={2}
          width={400}
          className="border border-black bg-white p-5"
        >
          <TextField
            label="Name"
            type="text"
            {...register('name', {
              required: 'Name is required',
            })}
            error={!!errors.name}
            helperText={errors.name?.message}
          />
          <TextField
            label="FileNumber"
            type="text"
            {...register('fileNumber', {
              required: 'FileNumber is required',
            })}
            error={!!errors.fileNumber}
            helperText={errors.fileNumber?.message}
          />
          <FormControl fullWidth error={!!errors.category}>
            <InputLabel id="type-select-label">Category</InputLabel>
            <Select
              labelId="type-select-label"
              id="type-select"
              label="Category"
              {...register('category', {
                required: 'Category is required',
              })}
              error={!!errors.category}
            >
              {projectTypeLists.map((item) => (
                <MenuItem key={item.id} value={item.name}>
                  {item.name}
                </MenuItem>
              ))}
            </Select>
            {errors.category && (
              <FormHelperText>{errors.category.message}</FormHelperText>
            )}
          </FormControl>
          <Button type="submit" variant="contained">
            Create Project
          </Button>
        </Stack>
      </form>
    </>
  );
};

export default CreateProject;

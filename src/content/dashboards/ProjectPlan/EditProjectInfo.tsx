import { useEffect, useState, FC } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

import {
  TextField,
  Grid,
  Button,
  MenuItem,
  InputLabel,
  FormControl,
  Select,
} from '@mui/material';

interface EditProjectInfoProps {
  projectId: number;
}

type ProjectInfo = {
  id: string;
  name: string;
  status: string;
  date: string;
  picture: string;
  fileNumber: string;
  cost: number;
  category: string;
};

type ProjectTypeLists = {
  id: number;
  name: string;
};

interface FormValues {
  name: string;
  status: string;
  fileNumber: string;
  category: string;
}

const EditProjectInfo: FC<EditProjectInfoProps> = ({ projectId }) => {
  const [projectInfo, setProjectInfo] = useState<ProjectInfo>();
  const [projectTypeLists, setProjectTypeLists] = useState<ProjectTypeLists[]>(
    [],
  );
  const form = useForm({
    defaultValues: {
      name: '',
      status: '',
      fileNumber: '',
      category: '',
    },
  });
  const { setValue } = useForm();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;

  const onTodoSubmit = async (data: FormValues) => {
    const { name, status, fileNumber, category } = data;

    const formData: ProjectInfo = {
      name,
      status,
      fileNumber,
      category,
      id: projectInfo.id,
      date: projectInfo.date,
      picture: projectInfo.picture,
      cost: projectInfo.cost,
    };

    try {
      await axios.put(
        `http://localhost:3000/projectLists/${projectId}`,
        formData,
      );
    } catch (error) {
      throw new Error(String(error));
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('http://localhost:3000/projectLists');
      const projectLists = response.data;
      const project = projectLists.filter((item: any) => item.id === projectId);
      setProjectInfo(project[0]);
    };
    fetchData();

    const fetchTypeListsData = async () => {
      const response = await axios.get(
        'http://localhost:3000/projectTypeLists',
      );
      setProjectTypeLists(response.data);
    };
    fetchTypeListsData();
  }, [projectId]);

  useEffect(() => {
    if (projectInfo) {
      form.setValue('name', projectInfo.name);
      form.setValue('status', projectInfo.status);
      form.setValue('fileNumber', projectInfo.fileNumber);
      form.setValue('category', projectInfo.category);
    }
  }, [projectInfo, setValue]);

  return (
    <div>
      <form noValidate className="flex" onSubmit={handleSubmit(onTodoSubmit)}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={3}>
            <TextField
              label="Name"
              sx={{ width: '100%' }}
              type="text"
              {...register('name', {
                required: 'Name is required',
              })}
              error={!!errors.name}
              helperText={errors.name?.message}
            />
          </Grid>
          <Grid item xs={2}>
            <TextField
              label="FileNumber"
              sx={{ width: '100%' }}
              type="text"
              {...register('fileNumber', {
                required: 'FileNumber is required',
              })}
              error={!!errors.fileNumber}
              helperText={errors.fileNumber?.message}
            />
          </Grid>
          <Grid item xs={2}>
            <FormControl fullWidth error={!!errors.category}>
              <InputLabel id="category-select-label">Category</InputLabel>
              <Select
                labelId="category-select-label"
                id="category-select"
                label="category"
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
            </FormControl>
          </Grid>
          <Grid item xs={1}>
            <FormControl fullWidth error={!!errors.status}>
              <InputLabel id="type-select-label">Status</InputLabel>
              <Select
                labelId="type-select-label"
                id="type-select"
                label="Status"
                {...register('status')}
              >
                <MenuItem value="Plan">Plan</MenuItem>
                <MenuItem value="Progress">Progress</MenuItem>
                <MenuItem value="Completed">Completed</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={2}>
            <Button type="submit" variant="contained" style={{ width: '100%' }}>
              edit info
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default EditProjectInfo;

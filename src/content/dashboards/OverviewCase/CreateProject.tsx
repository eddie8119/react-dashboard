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
import { useForm } from 'react-hook-form';

import axios from 'axios';

interface FormValues {
  name: string;
  fileNumber: string;
  category: string;
}

interface ProjectFormValues extends FormValues {
  id: number;
  status: string;
  date: string;
  picture?: string;
  cost: number;
}

const CreateProject = () => {
  const form = useForm<FormValues>({
    defaultValues: {
      name: '',
      fileNumber: '',
      category: '',
    },
  });

  const { register, handleSubmit, formState } = form;
  const { errors } = formState;

  const onSubmit = async (data: FormValues) => {
    const { name, fileNumber, category } = data;

    const formData: ProjectFormValues = {
      id: Date.now(),
      name,
      status: 'Progress',
      date: new Date().toISOString(),
      picture: '',
      fileNumber,
      cost: 0,
      category,
    };

    try {
      await axios.post('http://localhost:3000/projectListsTest', formData);
      form.reset();
      form.setValue('category', '');
    } catch (error) {
      console.error(error);
    }
  };

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
            <InputLabel id="demo-simple-select-label">Category</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Category"
              {...register('category', {
                required: 'Category is required',
              })}
              error={!!errors.category}
            >
              <MenuItem value="House">House</MenuItem>
              <MenuItem value="Mansion">Mansion</MenuItem>
              <MenuItem value="Commercial">Commercial</MenuItem>
              <MenuItem value="Office">Office</MenuItem>
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

import {
  TextField,
  Stack,
  Button,
  MenuItem,
  InputLabel,
  FormControl,
  Select,
} from '@mui/material';
import { useForm } from 'react-hook-form';

import axios from 'axios';

interface FormValues {
  name: string;
  fileNumber: string;
  category: string;
}

interface ProjectFormValues {
  id: number;
  name: string;
  status: string;
  date: string;
  picture?: string;
  fileNumber: string;
  cost: number;
  category: string;
}

const CreateProject = () => {
  const form = useForm<FormValues>({
    defaultValues: {
      name: '',
      fileNumber: '',
      category: '',
    },
  });

  const { register, handleSubmit } = form;

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
          <TextField label="name" type="text" {...register('name')} />
          <TextField
            label="fileNumber"
            type="text"
            {...register('fileNumber')}
          />
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">category</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="category"
              {...register('category')}
            >
              <MenuItem value="House">House</MenuItem>
              <MenuItem value="Mansion">Mansion</MenuItem>
              <MenuItem value="Commercial">Commercial</MenuItem>
              <MenuItem value="Office">Office</MenuItem>
            </Select>
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

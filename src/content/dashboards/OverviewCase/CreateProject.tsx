import { TextField, Stack, Button } from '@mui/material';
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
          <TextField label="category" type="text" {...register('category')} />
          <Button type="submit" variant="contained">
            Create Project
          </Button>
        </Stack>
      </form>
    </>
  );
};

export default CreateProject;

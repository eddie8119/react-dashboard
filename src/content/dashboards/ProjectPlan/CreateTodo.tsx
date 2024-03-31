import { useEffect, useState, useContext, FC } from 'react';
import { useForm } from 'react-hook-form';
import ProjectContext from '../../../context/ProjectContext';
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

interface FormValues {
  todo: string;
  quantity: number;
  uint: string;
}
interface CreateTodoProps {
  firmTaskId: number;
}

const CreateTodo: FC<CreateTodoProps> = ({ firmTaskId }) => {
  const { projectInfo, handlerSetUpdateProjectInfo } =
    useContext(ProjectContext);
  const [uintLists, setUintLists] = useState<UintList[]>([]);

  const form = useForm<FormValues>({
    defaultValues: {
      todo: '',
      quantity: 0,
      uint: '',
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;

  const onTodoSubmit = async (data: FormValues) => {
    const { todo, quantity, uint } = data;
    const formData: TaskData = {
      id: Date.now(),
      todo,
      quantity,
      uint,
      stock: 0,
      cost: 0,
      price: 0,
    };

    const updateThirdPartyLists = projectInfo.thirdPartyLists.map((item) => {
      if (item.id === firmTaskId) {
        return {
          ...item,
          taskLists: [...item.taskLists, formData],
        };
      }
      return item;
    });

    try {
      await axios.patch(
        `http://localhost:3000/projectLists/${projectInfo.id}`,
        {
          thirdPartyLists: updateThirdPartyLists,
        },
      );
      form.reset();
      form.setValue('uint', '');
      handlerSetUpdateProjectInfo();
    } catch (error) {
      throw new Error(String(error));
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('http://localhost:3000/uintLists');
      setUintLists(response.data);
    };
    fetchData();
  }, []);

  return (
    <form
      noValidate
      className="grid grid-cols-1 gap-3"
      onSubmit={handleSubmit(onTodoSubmit)}
    >
      <p>add construction item</p>
      <Grid container spacing={1} alignItems="center">
        <Grid item xs={6}>
          <TextField
            label="Todo"
            type="text"
            {...register('todo', {
              required: 'Todo is required',
            })}
            error={!!errors.todo}
            helperText={errors.todo?.message}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField label="Quantity" type="text" />
        </Grid>
        <Grid item xs={3}>
          <FormControl fullWidth>
            <InputLabel id="uint-select-label">Uint</InputLabel>
            <Select
              labelId="uint-select-label"
              id="uint-select"
              label="Uint"
              {...register('uint')}
            >
              {uintLists.map((item) => (
                <MenuItem key={item.id} value={item.uint}>
                  {item.uint}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <Button type="submit" variant="contained" style={{ width: '100%' }}>
        Add item
      </Button>
    </form>
  );
};

export default CreateTodo;

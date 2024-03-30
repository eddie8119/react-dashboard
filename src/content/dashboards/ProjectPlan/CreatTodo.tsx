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

interface UintList {
  id: number;
  uint: string;
}

interface FormValues {
  todo: string;
  quantity: number;
  uint: string;
}

const CreatTodo = () => {
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

    // 過濾id 找到供向 -> 改成整個物件傳進來 -> 複製一份taskLists - > push進taskLists ->

    try {
      await axios.post('http://localhost:3000/project0', formData);
      form.reset();
      form.setValue('uint', '');
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

export default CreatTodo;

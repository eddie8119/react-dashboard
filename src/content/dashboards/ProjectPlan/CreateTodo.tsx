import { useEffect, useState, useContext, FC } from 'react';
import { useForm } from 'react-hook-form';
import ProjectContext from '../../../context/ProjectContext';
import { editProjectThirdParty } from '../../../api/project';
import { getUnitLists } from '../../../api/unit';

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
  unit: string;
}
interface CreateTodoProps {
  firmTaskId: number;
}

const CreateTodo: FC<CreateTodoProps> = ({ firmTaskId }) => {
  const { projectInfo, handlerSetUpdateProjectInfo } =
    useContext(ProjectContext);
  const [unitLists, setUnitLists] = useState<UnitMenuObject[]>([]);

  const form = useForm<FormValues>({
    defaultValues: {
      todo: '',
      quantity: 0,
      unit: '',
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;

  const onTodoSubmit = async (data: FormValues): Promise<void> => {
    const { todo, unit } = data;
    //在useFotm HTML中，表單處理後的值都是字符串
    const quantity = parseInt(String(data.quantity), 10);

    const formData: TaskData = {
      id: Date.now(),
      todo,
      quantity,
      unit,
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
      await editProjectThirdParty(projectInfo.id, updateThirdPartyLists);
      form.reset();
      form.setValue('unit', '');
      handlerSetUpdateProjectInfo();
    } catch (error) {
      throw new Error(String(error));
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await getUnitLists();
      setUnitLists(response.data);
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
            value={form.watch('todo')}
            {...register('todo', {
              required: 'Todo is required',
              validate: (value) =>
                value.trim() !== '' || 'Cannot be only whitespace',
            })}
            error={!!errors.todo}
            helperText={errors.todo?.message}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            label="Quantity"
            type="number"
            value={form.watch('quantity') || ''}
            {...register('quantity')}
          />
        </Grid>
        <Grid item xs={3}>
          <FormControl fullWidth>
            <InputLabel id="unit-select-label">unit</InputLabel>
            <Select
              labelId="unit-select-label"
              id="unit-select"
              label="Unit"
              {...register('unit')}
              value={form.watch('unit')}
            >
              <MenuItem value="">Select Unit</MenuItem>
              {unitLists.map((item) => (
                <MenuItem key={item.id} value={item.unit}>
                  {item.unit}
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

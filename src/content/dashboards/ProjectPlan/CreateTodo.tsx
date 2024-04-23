import { useContext, FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import ProjectContext from '../../../context/ProjectContext';
import TaskContext from '../../../context/TaskContext';
import { editProjectThirdParty } from '../../../api/project';

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
  const { t } = useTranslation();
  const { projectInfo, handlerSetUpdateProjectInfo } =
    useContext(ProjectContext);
  const { unitLists } = useContext(TaskContext);

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

  return (
    <form
      noValidate
      className="grid grid-cols-1 gap-3"
      onSubmit={handleSubmit(onTodoSubmit)}
    >
      <header className="text-black">
        <h3>{t(`projectPlan.createFirmTask.Add-Item`)}</h3>
      </header>
      <Grid container spacing={1} alignItems="center">
        <Grid item xs={6}>
          <TextField
            label={t('input-label.Todo')}
            type="text"
            value={form.watch('todo')}
            {...register('todo', {
              required: 'Todo is required',
              validate: (value) =>
                value.trim() !== '' || t('input-sign.whitespaceSign'),
            })}
            error={!!errors.todo}
            helperText={errors.todo?.message}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            label={t('input-label.Quantity')}
            type="number"
            value={form.watch('quantity') || ''}
            {...register('quantity')}
          />
        </Grid>
        <Grid item xs={3}>
          <FormControl fullWidth>
            <InputLabel id="unit-select-label">
              {t('input-label.Unit')}
            </InputLabel>
            <Select
              labelId="unit-select-label"
              id="unit-select"
              label="Unit"
              {...register('unit')}
              value={form.watch('unit')}
            >
              <MenuItem value="">
                {t(`selection.unit-select.Select-Unit`)}
              </MenuItem>
              {unitLists.map((item) => (
                <MenuItem key={item.id} value={item.unit}>
                  {t(`selection.unit-select.${item.unit}`)}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <Button type="submit" variant="contained" style={{ width: '100%' }}>
        {t(`projectPlan.createFirmTask.Add-Item`)}
      </Button>
    </form>
  );
};

export default CreateTodo;

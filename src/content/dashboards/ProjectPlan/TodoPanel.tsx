import { useState, lazy, useContext, useEffect, FC } from 'react';
import ProjectContext from '../../../context/ProjectContext';
import TaskContext from '../../../context/TaskContext';
import { editProjectThirdParty } from '../../../api/project';
import Input from '@mui/material/Input';
import { useForm } from 'react-hook-form';
import { Select, Button, MenuItem } from '@mui/material';
const PopUp = lazy(() => import('../../../components/PopUp'));

interface TodoPanelProps {
  task: TaskData;
  index: number;
  firmTaskId: number;
  firmTaskLists: TaskData[];
}

interface FormValues {
  todo: string;
  unit: string;
  quantity: number;
  cost: number;
}

const TodoPanel: FC<TodoPanelProps> = ({
  task,
  index,
  firmTaskId,
  firmTaskLists,
}) => {
  const { projectInfo, handlerSetUpdateProjectInfo } =
    useContext(ProjectContext);
  const { unitLists } = useContext(TaskContext);
  const [openDeleteComfirmPop, setOpenDeleteComfirmPop] =
    useState<boolean>(false);

  const form = useForm({
    defaultValues: {
      todo: '',
      unit: '',
      quantity: 0,
      cost: 0,
    },
  });
  const { setValue } = useForm();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;

  const handleDeletePopOpen: () => void = () => {
    setOpenDeleteComfirmPop(true);
  };
  const handleDeletePopClose: () => void = () => {
    setOpenDeleteComfirmPop(false);
  };

  //共用方法handleUpdateTaskTodoApi
  const handleUpdateTaskTodoApi = async (
    updateData: TaskData[],
  ): Promise<void> => {
    const updateThirdPartyLists = projectInfo.thirdPartyLists.map((item) => {
      if (item.id === firmTaskId) {
        const totalCost = updateData.reduce(
          (sum, item) => sum + item.cost * item.quantity,
          0,
        );

        return {
          ...item,
          cost: totalCost,
          taskLists: updateData,
        };
      }
      return item;
    });

    //專案總成本 也要更新 計算project.cost
    const projectCost = updateThirdPartyLists.reduce(
      (sum, item) => sum + item.cost,
      0,
    );

    try {
      await editProjectThirdParty(
        projectInfo.id,
        updateThirdPartyLists,
        projectCost,
      );
      handlerSetUpdateProjectInfo();
    } catch (error) {
      throw new Error(String(error));
    }
  };

  const deleteTodo: (id: number) => Promise<void> = async (id) => {
    const updateFirmTaskLists = firmTaskLists.filter((item) => item.id !== id);
    await handleUpdateTaskTodoApi(updateFirmTaskLists);
  };

  const editTodoSubmit = async (data: FormValues): Promise<void> => {
    const { todo, unit } = data;
    //在useFotm HTML中，表單處理後的值都是字符串
    const quantity = parseInt(String(data.quantity), 10);
    const cost = parseInt(String(data.cost), 10);

    const formData: TaskData = {
      todo,
      unit,
      quantity,
      cost,
      id: task.id,
      price: task.price,
      stock: task.stock,
    };

    //取代正在編輯的todo
    const updateFirmTaskLists = firmTaskLists.map((item) => {
      if (item.id === task.id) {
        return formData;
      }
      return item;
    });
    await handleUpdateTaskTodoApi(updateFirmTaskLists);
  };

  useEffect(() => {
    form.setValue('todo', task.todo);
    form.setValue('quantity', task.quantity);
    form.setValue('unit', task.unit);
    form.setValue('cost', task.cost);
  }, [task, setValue]);

  return (
    <>
      <form className="flex gap-3" onSubmit={handleSubmit(editTodoSubmit)}>
        <div className="flex w-[4%] items-center">{index + 1}</div>
        <Input
          type="text"
          {...register('todo', {
            required: 'Todo is required',
            validate: (value) => value.trim() !== '',
          })}
          error={!!errors.todo}
          style={{ width: '16%' }}
        />
        <Input
          type="number"
          {...register('quantity')}
          style={{ width: '12%' }}
        />
        <div style={{ position: 'relative', width: '15%' }}>
          <Select
            id="unit-select"
            variant="standard"
            value={form.watch('unit')}
            {...register('unit')}
            style={{
              position: 'absolute',
              bottom: 0,
              width: '100%',
              textAlign: 'center',
              paddingBottom: '0',
            }}
          >
            {unitLists.map((item) => (
              <MenuItem key={item.id} value={item.unit}>
                {item.unit}
              </MenuItem>
            ))}
          </Select>
        </div>

        <Input
          type="number"
          placeholder="Cost"
          {...register('cost')}
          style={{ width: '20%' }}
        />
        <Button type="submit" variant="contained" style={{ width: '20px' }}>
          edit
        </Button>
        <Button
          type="button"
          onClick={handleDeletePopOpen}
          variant="contained"
          style={{ width: '20px', backgroundColor: '#dc2626' }}
        >
          delete
        </Button>
      </form>

      {/* 彈窗 */}
      <PopUp
        openComfirmPop={openDeleteComfirmPop}
        handlePopClose={handleDeletePopClose}
        deleteOnClick={() => deleteTodo(task.id)}
        popupTitle="Delete the task"
        popupIndex={`Are you sure you want to delete ${task.todo}?`}
      />
    </>
  );
};

export default TodoPanel;

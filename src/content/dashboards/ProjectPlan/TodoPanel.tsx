import { useState, lazy, useContext, useEffect, FC } from 'react';
import ProjectContext from '../../../context/ProjectContext';
import { editProjectThirdParty } from '../../../api/project';
import { getUnitLists } from '../../../api/unit';
import Input from '@mui/material/Input';
import { useForm } from 'react-hook-form';
import { TextField, Button, MenuItem } from '@mui/material';
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
  const [openDeleteComfirmPop, setOpenDeleteComfirmPop] =
    useState<boolean>(false);
  const [unitLists, setUnitLists] = useState<UnitMenuObject[]>([]);

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
        return {
          ...item,
          taskLists: updateData,
        };
      }
      return item;
    });

    try {
      await editProjectThirdParty(projectInfo.id, updateThirdPartyLists);
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
    const fetchInitData = async () => {
      const response = await getUnitLists();
      setUnitLists(response.data);
    };
    fetchInitData();
  }, []);

  useEffect(() => {
    form.setValue('todo', task.todo);
    form.setValue('quantity', task.quantity);
    form.setValue('unit', task.unit);
    form.setValue('cost', task.cost);
  }, [task, setValue]);

  const btnLists = [
    {
      id: 1,
      name: 'delete',
      color: 'bg-red-600',
      hovercolor: 'bg-red-700',
      action: handleDeletePopOpen,
    },
  ];

  return (
    <div className=" flex items-center">
      <form className="flex gap-3" onSubmit={handleSubmit(editTodoSubmit)}>
        <div className="flex w-[20px] items-center">{index + 1}</div>
        <Input
          type="text"
          {...register('todo', {
            required: 'Todo is required',
            validate: (value) => value.trim() !== '',
          })}
          error={!!errors.todo}
          style={{ width: '90px' }}
        />
        <Input
          type="number"
          {...register('quantity')}
          style={{ width: '70px' }}
        />
        <div style={{ position: 'relative', width: '80px' }}>
          <TextField
            id="unit-select"
            select
            variant="standard"
            defaultValue={task.unit}
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
          </TextField>
        </div>

        <Input
          type="number"
          placeholder="Cost"
          {...register('cost')}
          style={{ width: '100px' }}
        />
        <Button type="submit" variant="contained" style={{ width: '20px' }}>
          edit
        </Button>

        <div className="flex gap-2">
          {btnLists.map((btn) => (
            <button
              onClick={btn.action}
              key={btn.id}
              className={`rounded-md  border border-transparent ${btn.color} px-3 py-2 text-center text-sm font-medium text-white hover:${btn.hovercolor}  focus:ring-2`}
            >
              {btn.name}
            </button>
          ))}
        </div>
      </form>

      {/* 彈窗 */}
      <PopUp
        openComfirmPop={openDeleteComfirmPop}
        handlePopClose={handleDeletePopClose}
        deleteOnClick={() => deleteTodo(task.id)}
        popupTitle="Delete the task"
        popupIndex={`Are you sure you want to delete ${task.todo}?`}
      />
    </div>
  );
};

export default TodoPanel;

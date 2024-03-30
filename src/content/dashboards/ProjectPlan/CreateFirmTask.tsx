import { useEffect, useState, FC } from 'react';
import axios from 'axios';

import FirmTaskPanel from './FirmTaskPanel';

interface CreateFirmTaskProps {
  projectId: string;
}
interface Task {
  id: number;
  todo: string;
  uint: string;
  quantity: number;
  stock: number;
  cost: number;
  price: number;
}

interface FirmTask {
  id: number;
  name: string;
  taskLists: Task[];
}

const CreateFirmTask: FC<CreateFirmTaskProps> = ({ projectId }) => {
  const [firmTaskLists, setFirmTaskLists] = useState<FirmTask[]>([]);
  const [updateFirmTaskLists, setUpdateFirmTaskLists] =
    useState<boolean>(false);

  const handlerSetUpdateFirmTaskLists = () => {
    setUpdateFirmTaskLists((prev) => !prev);
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `http://localhost:3000/projectLists/${projectId}`,
      );

      setFirmTaskLists(response.data.thirdParty);
    };
    fetchData();
  }, [updateFirmTaskLists]);

  return (
    <div>
      <h1 className="text-black">Create Firm Task</h1>
      <div className="flex gap-4 ">
        {firmTaskLists.map((firmTask: FirmTask) => (
          <FirmTaskPanel firmTask={firmTask} firmId={projectId} />
        ))}
      </div>
    </div>
  );
};

export default CreateFirmTask;

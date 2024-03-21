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
  tasks: Task[];
}

const CreateFirmTask: FC<CreateFirmTaskProps> = ({ projectId }) => {
  const [firmTaskLists, setFirmTaskLists] = useState<FirmTask[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `http://localhost:3000/project${projectId}`,
      );

      setFirmTaskLists(response.data);
    };
    fetchData();
  }, []);

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

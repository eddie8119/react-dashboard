import { useEffect, useState, FC } from 'react';
import axios from 'axios';

interface CreateFirmTaskProps {
  projectId: string;
}

const CreateFirmTask: FC<CreateFirmTaskProps> = ({ projectId }) => {
  const [firmTaskLists, setFirmTaskLists] = useState('');

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
        {firmTaskLists.map((firmTask) => (
          <div
            key={firmTask.id}
            className="grid w-[300px] grid-cols-1 gap-2 bg-box-bg p-4"
          >
            <h1 className="text-center">{firmTask.name}</h1>
            <p> construction item: </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CreateFirmTask;

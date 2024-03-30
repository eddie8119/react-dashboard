import { useEffect, useState, useContext, FC } from 'react';
import ProjectContext from '../../../context/ProjectContext';
import FirmTaskPanel from './FirmTaskPanel';

interface CreateFirmTaskProps {
  projectId: string;
  projectInfo: ProjectData;
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

const CreateFirmTask: FC<CreateFirmTaskProps> = () => {
  const projectInfo = useContext(ProjectContext);
  const [firmTaskLists, setFirmTaskLists] = useState<FirmTask[]>([]);
  const [updateFirmTaskLists, setUpdateFirmTaskLists] =
    useState<boolean>(false);

  const handlerSetUpdateFirmTaskLists = () => {
    setUpdateFirmTaskLists((prev) => !prev);
  };

  useEffect(() => {
    const fetchData = async () => {
      setFirmTaskLists(projectInfo.thirdPartyLists);
    };
    fetchData();
  }, [projectInfo, updateFirmTaskLists]);

  return (
    <>
      <h1 className="text-black">Create Firm Task</h1>
      <div className="flex gap-4 ">
        {firmTaskLists.map((firmTask: FirmTask) => (
          <FirmTaskPanel firmTask={firmTask} />
        ))}
      </div>
    </>
  );
};

export default CreateFirmTask;

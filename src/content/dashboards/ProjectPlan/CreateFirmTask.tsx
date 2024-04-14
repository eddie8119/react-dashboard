import { useEffect, useState, useContext } from 'react';
import ProjectContext from '../../../context/ProjectContext';
import TaskContext, { initTaskContext } from '../../../context/TaskContext';
import FirmTaskPanel from './FirmTaskPanel';
import { getUnitLists } from '../../../api/unit';

const CreateFirmTask = () => {
  const { projectInfo } = useContext(ProjectContext);
  const [firmTaskLists, setFirmTaskLists] = useState<ThirdPartyData[]>([]);
  const [unitLists, setUnitLists] = useState<UnitMenuObject[]>([]);
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

  useEffect(() => {
    const fetchData = async () => {
      const response = await getUnitLists();
      setUnitLists(response.data);
    };
    fetchData();
  }, []);

  return (
    <TaskContext.Provider value={{ unitLists }}>
      <div className="flex h-full w-full flex-col gap-4 ">
        <h1 className="text-black">Create Firm Task</h1>
        <div className="flex h-full w-full gap-4 overflow-x-auto">
          {firmTaskLists.map((firmTask: ThirdPartyData) => (
            <FirmTaskPanel firmTask={firmTask} key={firmTask.id} />
          ))}
        </div>
      </div>
    </TaskContext.Provider>
  );
};

export default CreateFirmTask;

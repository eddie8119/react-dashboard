import { useEffect, useState, useContext } from 'react';
import ProjectContext from '../../../context/ProjectContext';
import FirmTaskPanel from './FirmTaskPanel';

const CreateFirmTask = () => {
  const { projectInfo } = useContext(ProjectContext);
  const [firmTaskLists, setFirmTaskLists] = useState<ThirdPartyData[]>([]);
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
    <div className="flex h-full w-full flex-col gap-4 ">
      <h1 className="text-black">Create Firm Task</h1>
      <div className="flex h-full w-full gap-4 overflow-x-auto">
        {firmTaskLists.map((firmTask: ThirdPartyData) => (
          <FirmTaskPanel firmTask={firmTask} />
        ))}
      </div>
    </div>
  );
};

export default CreateFirmTask;

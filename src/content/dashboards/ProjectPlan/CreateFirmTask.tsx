import { useEffect, useState, useContext, FC } from 'react';
import ProjectContext from '../../../context/ProjectContext';
import FirmTaskPanel from './FirmTaskPanel';

const CreateFirmTask = () => {
  const projectInfo = useContext(ProjectContext);
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
    <>
      <h1 className="text-black">Create Firm Task</h1>
      <div className="flex gap-4 ">
        {firmTaskLists.map((firmTask: ThirdPartyData) => (
          <FirmTaskPanel firmTask={firmTask} />
        ))}
      </div>
    </>
  );
};

export default CreateFirmTask;

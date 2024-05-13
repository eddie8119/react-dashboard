import { useEffect, useState, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import ProjectContext from '../../../context/ProjectContext';
import TaskContext from '../../../context/TaskContext';
import FirmTaskPanel from './FirmTaskPanel';
import ProjectPlanCostChart from './ProjectPlanCostChart';
import { getUnitLists } from '../../../api/unit';

const CreateFirmTask = () => {
  const { t } = useTranslation();
  const { projectInfo } = useContext(ProjectContext);
  const [firmTaskLists, setFirmTaskLists] = useState<ThirdPartyData[]>([]);
  const [unitLists, setUnitLists] = useState<UnitMenuObject[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      setFirmTaskLists(projectInfo.thirdPartyLists);
    };
    fetchData();
  }, [projectInfo]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getUnitLists();
      setUnitLists(response.data);
    };
    fetchData();
  }, []);

  return (
    <TaskContext.Provider value={{ unitLists }}>
      <div className="container-box">
        <header className="text-black">
          <h1>{t(`projectPlan.createFirmTask.Create-Firm-Task`)}</h1>
        </header>
        <div className="flex h-full w-full gap-4 overflow-x-auto">
          {firmTaskLists.map((firmTask: ThirdPartyData) => (
            <FirmTaskPanel firmTask={firmTask} key={firmTask.id} />
          ))}
        </div>
      </div>
      <ProjectPlanCostChart firmTaskLists={firmTaskLists} />
    </TaskContext.Provider>
  );
};

export default CreateFirmTask;

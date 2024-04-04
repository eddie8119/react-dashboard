import { useState, useEffect, useContext } from 'react';
import ProjectContext from '../../context/ProjectContext';
import axios from 'axios';

interface FirmObject {
  id: number;
  name: string;
}

const ChoseFirm = () => {
  const [selectedFirms, setSelectedFirms] = useState<string[]>([]);
  const [firmLists, setFirmLists] = useState<FirmObject[]>([]);
  const { projectInfo, handlerSetUpdateProjectInfo } =
    useContext(ProjectContext);

  const handleChoseFirm = async (firmName: string) => {
    let updateFirmDataLists = [];

    if (selectedFirms.includes(firmName)) {
      updateFirmDataLists = projectInfo.thirdPartyLists.filter(
        (firm) => firm.name !== firmName,
      );

      setSelectedFirms((prevFirms) =>
        prevFirms.filter((firm) => firm !== firmName),
      );
    } else {
      const newFirmData: ThirdPartyData = {
        id: Date.now(),
        name: firmName,
        taskLists: [],
      };
      updateFirmDataLists = [...projectInfo.thirdPartyLists, newFirmData];

      setSelectedFirms((prevFirms) => [...prevFirms, firmName]);
    }

    await axios.patch(`http://localhost:3000/projectLists/${projectInfo.id}`, {
      thirdPartyLists: updateFirmDataLists,
    });
    handlerSetUpdateProjectInfo();
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('http://localhost:3000/firmLists');
      setFirmLists(response.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1 className="text-black">Create Construction Type</h1>
      <div className="flex w-full flex-wrap  overflow-x-auto">
        {firmLists.map((firm) => (
          <div
            key={firm.id}
            className={`${selectedFirms.includes(firm.name) ? 'bg-blue-700' : 'border-black text-black'} m-1 flex cursor-pointer items-center justify-center rounded-md border  p-4 `}
            onClick={() => handleChoseFirm(firm.name)}
          >
            {firm.name}
            {selectedFirms.includes(firm.name) && (
              <span className="ml-2 h-3 w-3 rounded-full bg-white" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChoseFirm;

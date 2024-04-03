import { useState, useEffect } from 'react';
import axios from 'axios';

interface FirmObject {
  id: number;
  name: string;
}

const ChoseFirm = () => {
  const [selectedFirms, setSelectedFirms] = useState<string[]>([]);
  const [firmLists, setFirmLists] = useState<FirmObject[]>([]);

  const handleChoseFirm = (firmName: string) => {
    setSelectedFirms((prevFirms) => {
      if (prevFirms.includes(firmName)) {
        return prevFirms.filter((firm) => firm !== firmName);
      } else {
        return [...prevFirms, firmName];
      }
    });
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

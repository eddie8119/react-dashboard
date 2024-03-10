import { useState, useEffect } from "react";
import axios from "axios";

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
      const response = await axios.get("http://localhost:3000/firmLists");
      setFirmLists(response.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1 className="text-gray">選擇工程種類</h1>

      <div className="flex flex-wrap">
        {firmLists.map((firm) => (
          <div
            key={firm.id}
            className="m-2 p-2 bg-box-bg cursor-pointer relative"
            onClick={() => handleChoseFirm(firm.name)}
          >
            {firm.name}
            <div
              className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3 h-3 rounded-full ${selectedFirms.includes(firm.name) ? "bg-green-500" : "bg-gray-500"}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChoseFirm;

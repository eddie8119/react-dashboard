import { useState, useEffect, FC } from 'react';
import { getFirmLists } from '../../api/firm';

interface FirmListProps {
  thirdParties?: string[];
  handleChoseFirm: (firmName: string) => Promise<void>;
}

const FirmList: FC<FirmListProps> = ({ thirdParties, handleChoseFirm }) => {
  const [firmLists, setFirmLists] = useState<FirmObject[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getFirmLists();
      setFirmLists(response.data);
    };

    fetchData();
  }, []);

  return (
    <div className="flex w-full flex-wrap gap-2 overflow-x-auto">
      {firmLists.map((firm) => (
        <button
          key={firm.id}
          className={`${
            thirdParties?.includes(firm.name)
              ? 'bg-blue-700'
              : 'box-border text-black'
          } flex cursor-pointer items-center justify-center rounded-md border p-4 `}
          onClick={() => handleChoseFirm(firm.name)}
          role="button"
        >
          {firm.name}
          {thirdParties?.includes(firm.name) && (
            <span className="ml-2 h-3 w-3 rounded-full bg-white" />
          )}
        </button>
      ))}
    </div>
  );
};

export default FirmList;

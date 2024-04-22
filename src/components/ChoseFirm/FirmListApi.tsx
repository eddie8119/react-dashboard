import { useState, useEffect, FC } from 'react';
import { getFirmLists } from '../../api/firm';
import FirmListUi from '../FirmListUi/index';

interface FirmListProps {
  thirdParties?: string[];
  handleChoseFirm?: (firmName: string) => Promise<void>;
}

const FirmListApi: FC<FirmListProps> = ({ thirdParties, handleChoseFirm }) => {
  const [firmLists, setFirmLists] = useState<FirmObject[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getFirmLists();
      setFirmLists(response.data);
    };

    fetchData();
  }, []);

  return (
    <FirmListUi
      firmLists={firmLists}
      thirdParties={thirdParties}
      handleChoseFirm={handleChoseFirm}
    />
  );
};

export default FirmListApi;

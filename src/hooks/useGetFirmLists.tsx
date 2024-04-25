import { useState, useEffect } from 'react';
import { getFirmLists } from '../api/firm';

const useGetFirmLists = () => {
  const [firmLists, setFirmLists] = useState<FirmObject[]>([]);

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      const response = await getFirmLists();
      setFirmLists(response.data);
    };

    fetchData();
  }, []);

  return firmLists;
};

export default useGetFirmLists;

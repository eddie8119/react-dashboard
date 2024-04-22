import { useState, useEffect } from 'react';
import FirmListApi from './FirmListApi';
import AddFirm from './AddFirm';
import FirmListCreateContext, {
  initFirmListCreateContext,
} from '../../../context/FirmListCreateContext';
import { getFirmLists } from '../../../api/firm';

const FirmListPannel = () => {
  const [updateFirmList, setUpdateFirmList] = useState<boolean>(
    initFirmListCreateContext.updateFirmList,
  );
  const [firmLists, setFirmLists] = useState<FirmObject[]>([]);

  const handlerSetUpdateFirmList = () => {
    setUpdateFirmList(!updateFirmList);
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await getFirmLists();
      setFirmLists(response.data);
    };

    fetchData();
  }, [updateFirmList]);

  return (
    <FirmListCreateContext.Provider
      value={{ updateFirmList, firmLists, handlerSetUpdateFirmList }}
    >
      <section className="container-box">
        <header className="text-black">
          <h1>Construction Type</h1>
        </header>
        <AddFirm />
        <FirmListApi />
      </section>
    </FirmListCreateContext.Provider>
  );
};

export default FirmListPannel;

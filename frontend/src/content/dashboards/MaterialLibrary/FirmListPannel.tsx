import { useState } from 'react';
import FirmListApi from './FirmListApi';
import AddFirm from './AddFirm';
import FirmListCreateContext, {
  initFirmListCreateContext,
} from '../../../context/FirmListCreateContext';
import useGetFirmLists from '../../../hooks/useGetFirmLists';

const FirmListPannel = () => {
  const [updateFirmList, setUpdateFirmList] = useState<boolean>(
    initFirmListCreateContext.updateFirmList,
  );
  const firmLists = useGetFirmLists(updateFirmList);

  const handlerSetUpdateFirmList = () => {
    setUpdateFirmList(!updateFirmList);
  };

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

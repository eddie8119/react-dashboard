import { createContext } from 'react';

interface FirmListCreateType {
  updateFirmList: boolean;
  firmLists: FirmObject[];
  handlerSetUpdateFirmList: () => void;
}

export const initFirmListCreateContext: FirmListCreateType = {
  updateFirmList: false,
  firmLists: [],
  handlerSetUpdateFirmList: () => {},
};

const FirmListCreateContext = createContext<FirmListCreateType>(
  initFirmListCreateContext,
);

export default FirmListCreateContext;

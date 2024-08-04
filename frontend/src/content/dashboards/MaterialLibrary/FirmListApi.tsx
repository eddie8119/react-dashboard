import { FC, useContext } from 'react';
import FirmListCreateContext from '../../../context/FirmListCreateContext';

import FirmListUi from '../../../components/FirmListUi';

interface FirmListProps {
  thirdParties?: string[];
  handleChoseFirm?: (firmName: string) => Promise<void>;
}

const FirmListApi: FC<FirmListProps> = ({ thirdParties, handleChoseFirm }) => {
  const { firmLists } = useContext(FirmListCreateContext);

  return (
    <FirmListUi
      firmLists={firmLists}
      thirdParties={thirdParties}
      handleChoseFirm={handleChoseFirm}
    />
  );
};

export default FirmListApi;

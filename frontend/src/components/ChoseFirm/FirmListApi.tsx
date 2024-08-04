import { FC } from 'react';
import FirmListUi from '../FirmListUi/index';
import useGetFirmLists from '../../hooks/useGetFirmLists';

interface FirmListProps {
  thirdParties?: string[];
  handleChoseFirm?: (firmName: string) => Promise<void>;
}

const FirmListApi: FC<FirmListProps> = ({ thirdParties, handleChoseFirm }) => {
  const firmLists = useGetFirmLists();

  return (
    <FirmListUi
      firmLists={firmLists}
      thirdParties={thirdParties}
      handleChoseFirm={handleChoseFirm}
    />
  );
};

export default FirmListApi;

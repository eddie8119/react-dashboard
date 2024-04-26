import { useState } from 'react';

const usePopup = () => {
  const [openComfirmPop, setOpenComfirmPop] = useState<boolean>(false);

  const handlePopOpen: () => void = () => {
    setOpenComfirmPop(true);
  };
  const handlePopClose: () => void = () => {
    setOpenComfirmPop(false);
  };

  return { openComfirmPop, handlePopOpen, handlePopClose };
};

export default usePopup;

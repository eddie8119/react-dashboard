import { FC } from 'react';
import { Dialog, DialogTitle, DialogContent, IconButton } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';

interface PopUpProps {
  popupTitle: string;
  popupIndex: string;
  openComfirmPop: boolean;
  deleteThirdParty: () => void;
  handlePopClose: () => void;
}
const PopUp: FC<PopUpProps> = ({
  popupTitle,
  popupIndex,
  openComfirmPop,
  deleteThirdParty,
  handlePopClose,
}) => {
  const btnLists = [
    {
      id: 1,
      name: 'back',
      color: 'bg-blue-600',
      hovercolor: 'bg-blue-700',
      action: handlePopClose,
    },
    {
      id: 2,
      name: 'delete',
      color: 'bg-red-600',
      hovercolor: 'bg-red-700',
      action: deleteThirdParty,
    },
  ];

  return (
    <Dialog
      open={openComfirmPop}
      onClose={handlePopClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle style={{ textAlign: 'center' }}>
        {popupTitle}
        <IconButton
          edge="end"
          color="inherit"
          onClick={handlePopClose}
          aria-label="close"
          style={{ position: 'absolute', right: '20px', top: '10px' }}
        >
          <ClearIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent className="flex flex-col gap-4">
        <p>{popupIndex}</p>

        <div className="flex w-full justify-center gap-4">
          {btnLists.map((btn) => (
            <button
              onClick={btn.action}
              key={btn.id}
              className={`rounded-md border border-transparent ${btn.color} px-4 py-2 text-center text-sm font-medium text-white hover:${btn.hovercolor}  focus:ring-2 `}
            >
              {btn.name}
            </button>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PopUp;

import { useTranslation } from 'react-i18next';

import { Box, IconButton } from '@mui/material';

import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';

const Header = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const currentLanguage = i18n.language;
    const newLanguage = currentLanguage === 'zh' ? 'en' : 'zh';

    i18n.changeLanguage(newLanguage);
  };

  return (
    <div className="fixed z-10 h-10 w-full bg-white">
      <Box display="flex">
        <IconButton onClick={toggleLanguage}>
          <NotificationsOutlinedIcon />
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton>
        <IconButton>
          <PersonOutlinedIcon />
        </IconButton>
      </Box>
    </div>
  );
};

export default Header;

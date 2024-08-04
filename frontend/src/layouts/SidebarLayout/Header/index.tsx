import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Box, IconButton } from '@mui/material';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const languageLists = [
  {
    id: 0,
    name: '中文',
    value: 'zh',
  },
  {
    id: 1,
    name: 'English',
    value: 'en',
  },
];

const Header = () => {
  const { i18n } = useTranslation();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>): void => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = (): void => {
    setAnchorEl(null);
  };

  const handleLanguageChange = (language: string) => {
    i18n.changeLanguage(language);
    handleMenuClose();
  };

  return (
    <nav className="fixed z-10 flex h-[70px] w-full items-center bg-white">
      <Box display="flex">
        <IconButton onClick={handleMenuOpen}>
          <LanguageOutlinedIcon />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          {languageLists.map((item) => (
            <MenuItem
              key={item.id}
              onClick={() => handleLanguageChange(item.value)}
            >
              {item.name}
            </MenuItem>
          ))}
        </Menu>
        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton>
        <IconButton>
          <PersonOutlinedIcon />
        </IconButton>
      </Box>
    </nav>
  );
};

export default Header;

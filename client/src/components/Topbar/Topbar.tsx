import Logo from '../../assets/logo.svg';
import styles from './Topbar.module.scss';
import Button from '../Button/Button';

import Avatar from '../Avatar/Avatar';
import { NavLink, useNavigate } from 'react-router-dom';
import { ROUTES } from '../../router/constants';
import { useUserContext } from '../../context/UserContext';

// Material UI
import * as React from 'react';
import AvatarMaterialUi from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';

const links = [
  {
    path: ROUTES.HOME,
    title: 'Home',
  },
  {
    path: ROUTES.SERVICES,
    title: 'Services',
  },
  {
    path: ROUTES.ABOUT_US,
    title: 'About Us',
  },
];

const Topbar = () => {
  const navigate = useNavigate();
  const { user, logout } = useUserContext();

  const handleLogout = () => {
    logout();
    navigate(ROUTES.HOME);
  };

  // Material
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <div className={styles.topbar}>
        <div className={styles.leftSide}>
          <NavLink to={ROUTES.HOME}>
            <img src={Logo} alt="Logo" />
          </NavLink>
          <nav>
            <ul className={styles.navList}>
              {links.map((item, index) => (
                <li key={index}>
                  <NavLink to={item.path} className={({ isActive }) => (isActive ? styles.activeLink : undefined)}>
                    {item.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className={styles.rightSide}>
          {user ? (
            <div className={styles.rightSideWrapper}>
              <Tooltip title="Account settings">
                <IconButton
                  onClick={handleClick}
                  size="small"
                  sx={{ ml: 2 }}
                  aria-controls={open ? 'account-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                >
                  <Avatar style={{ padding: '20px 20px', fontSize: '1.5rem' }}>{user.email[0]}</Avatar>
                </IconButton>
              </Tooltip>
              <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: 'visible',
                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                    mt: 1.5,
                    '& .MuiAvatar-root': {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    '&::before': {
                      content: '""',
                      display: 'block',
                      position: 'absolute',
                      top: 0,
                      right: 21,
                      width: 10,
                      height: 10,
                      bgcolor: 'background.paper',
                      transform: 'translateY(-50%) rotate(45deg)',
                      zIndex: 0,
                    },
                  },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
              >
                <MenuItem onClick={handleClose}>
                  <AvatarMaterialUi /> My account
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <Settings fontSize="small" />
                  </ListItemIcon>
                  My Booking
                </MenuItem>
                <MenuItem onClick={handleLogout}>
                  <ListItemIcon>
                    <Logout fontSize="small" />
                  </ListItemIcon>
                  Logout
                </MenuItem>
              </Menu>
            </div>
          ) : (
            <Button onClick={() => navigate(ROUTES.LOGIN)}>Login / Sign Up</Button>
          )}
        </div>
      </div>
    </>
  );
};

export default Topbar;

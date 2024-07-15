import styles from './AccountMenu.module.scss';

import React, { useState, MouseEvent } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { ROUTES } from '@/router/constants';
import { useUserContext } from '../../context/UserContext';
import { Menu, MenuItem, ListItemIcon, Divider, IconButton, Tooltip, Avatar } from '@mui/material';
import { CalendarMonthOutlined, Logout } from '@mui/icons-material';
import AvatarNative from '../Avatar/Avatar';

interface AccountMenuProps {
  user: { email: string };
}

const links = [
  {
    path: ROUTES.BOOKING,
    title: 'My Booking',
  },
];

const AccountMenu: React.FC<AccountMenuProps> = ({ user }) => {
  const navigate = useNavigate();
  const { logout } = useUserContext();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div>
      <Tooltip title="Account settings">
        <IconButton
          onClick={handleClick}
          size="small"
          sx={{ ml: 2 }}
          aria-controls={open ? 'account-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
        >
          <AvatarNative style={{ padding: '20px', fontSize: '1.5rem' }}>{user.email[0]}</AvatarNative>
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
            '& .MuiMenuItem-root': {
              padding: '0.5rem 1rem',
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleClose}>
          <Avatar /> My Account
        </MenuItem>
        <Divider />
        <MenuItem>
          <NavLink className={styles.link} to={ROUTES.BOOKING} style={{ textDecoration: 'none', color: 'inherit' }}>
            <ListItemIcon>
              <CalendarMonthOutlined fontSize="small" />
            </ListItemIcon>
            My Bookings
          </NavLink>
        </MenuItem>
        <MenuItem onClick={handleLogout}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </div>
  );
};

export default AccountMenu;

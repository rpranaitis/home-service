import React from 'react';
import Logo from '../../assets/logo.svg';
import styles from './Topbar.module.scss';
import Button from '../Button/Button';
import { NavLink, useNavigate } from 'react-router-dom';
import { ROUTES } from '../../router/constants';

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

  const goLogin = () => {
    navigate(ROUTES.LOGIN);
  };

  return (
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
        <Button onClick={goLogin}>Login / Sign Up</Button>
      </div>
    </div>
  );
};

export default Topbar;

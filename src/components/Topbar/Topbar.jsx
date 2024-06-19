import React from 'react';
import Logo from '../../assets/logo.svg';
import styles from './Topbar.module.scss';
import Button from '../Button/Button';

const Topbar = () => {
  return (
    <div className={styles.topbar}>
      <div className={styles.leftSide}>
        <img src={Logo} alt="Logo" />
        <nav>
          <ul className={styles.navList}>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className={styles.rightSide}>
        <Button>Login / Sign Up</Button>
      </div>
    </div>
  );
};

export default Topbar;

import { Outlet } from 'react-router-dom';
import Topbar from '../components/Topbar/Topbar';
import styles from './Layout.module.scss';

const AuthLayout = () => {
  return (
    <>
      <Topbar />
      <div className={styles.container}>
        <Outlet />
      </div>
    </>
  );
};

export default AuthLayout;

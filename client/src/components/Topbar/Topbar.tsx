import Logo from '../../assets/logo.svg';
import styles from './Topbar.module.scss';
import Button from '../Button/Button';
import Avatar from '../Avatar/Avatar';
import { NavLink, useNavigate } from 'react-router-dom';
import { ROUTES } from '../../router/constants';
import { useUserContext } from '../../context/UserContext';

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
        {user ? (
          <div className={styles.rightSideWrapper}>
            <Button onClick={handleLogout} style={{ padding: '10px 20px' }}>
              <Avatar>{user.email[0]}</Avatar>
              Log out
            </Button>
          </div>
        ) : (
          <Button onClick={() => navigate(ROUTES.LOGIN)}>Login / Sign Up</Button>
        )}
      </div>
    </div>
  );
};

export default Topbar;

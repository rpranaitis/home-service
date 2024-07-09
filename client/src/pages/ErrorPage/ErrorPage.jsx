import styles from './ErrorPage.module.scss';
import Button from '../../components/Button/Button';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../router/constants';

const ErrorPage = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate(ROUTES.HOME);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Oops!</h1>
      <p className={styles.text}>Something went wrong...</p>
      <Button style={{ marginTop: 20 }} onClick={goHome}>
        Back to Home
      </Button>
    </div>
  );
};

export default ErrorPage;

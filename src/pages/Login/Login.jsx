import Button from '../../components/Button/Button';
import Form from '../../components/Form/Form';
import Input from '../../components/Input/Input';
import styles from './Login.module.scss';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../router/constants';

const Login = () => {
  return (
    <>
      <Form action="#">
        <h2 className={styles.header}>Login</h2>
        <div className={styles.inputsWrapper}>
          <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="Password" />
          <Button type="submit">Log in</Button>
        </div>
        <Link to={ROUTES.REGISTER} className={styles.redirectLink}>
          Don't have an account? Sign up
        </Link>
      </Form>
    </>
  );
};

export default Login;

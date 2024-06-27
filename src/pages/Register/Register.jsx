import Button from '../../components/Button/Button';
import Form from '../../components/Form/Form';
import Input from '../../components/Input/Input';
import styles from './Register.module.scss';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../router/constants';

const Register = () => {
  return (
    <>
      <Form action="#">
        <h2 className={styles.header}>Register</h2>
        <div className={styles.inputsWrapper}>
          <Input type="text" placeholder="Name" />
          <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="Password" />
          <Button type="submit">Register</Button>
        </div>
        <Link to={ROUTES.LOGIN} className={styles.redirectLink}>
          Already have an account? Log in
        </Link>
      </Form>
    </>
  );
};

export default Register;

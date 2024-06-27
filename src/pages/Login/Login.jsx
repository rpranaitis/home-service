import Button from '../../components/Button/Button';
import Form from '../../components/Form/Form';
import Input from '../../components/Input/Input';
import styles from './Login.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import { ROUTES } from '../../router/constants';
import { useState, useContext } from 'react';
import { UserContext } from '../../context/UserContext';

const Login = () => {
  const navigate = useNavigate();
  const { login } = useContext(UserContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogIn = (e) => {
    e.preventDefault();

    const user = {
      email,
    };

    login(user);
    navigate(ROUTES.HOME);
  };

  return (
    <>
      <Form onSubmit={handleLogIn}>
        <h2 className={styles.header}>Login</h2>
        <div className={styles.inputsWrapper}>
          <Input onChange={(e) => setEmail(e.target.value)} value={email} type="email" placeholder="Email" required />
          <Input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            placeholder="Password"
            required
          />
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

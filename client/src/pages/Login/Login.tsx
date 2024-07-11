import Button from '../../components/Button/Button';
import AuthForm from '../../components/AuthForm/AuthForm';
import Input from '../../components/Input/Input';
import styles from './Login.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import { ROUTES } from '../../router/constants';
import { useState, FormEvent } from 'react';
import { useUserContext } from '../../context/UserContext';
import { login as loginApi } from '../../api/auth';

const Login = () => {
  const navigate = useNavigate();
  const { login } = useUserContext();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogIn = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = {
      email,
      password,
    };

    loginApi(data).then((response) => {
      if (response) {
        login(response.user, response.token);
        navigate(ROUTES.HOME);
      }
    });
  };

  return (
    <>
      <AuthForm onSubmit={handleLogIn}>
        <h2 className={styles.header}>Login</h2>
        <div className={styles.inputsWrapper}>
          <Input onChange={(e) => setEmail(e.target.value)} value={email} type="email" placeholder="Email" required />
          <Input onChange={(e) => setPassword(e.target.value)} value={password} type="password" placeholder="Password" required />
          <Button type="submit">Log in</Button>
        </div>
        <Link to={ROUTES.REGISTER} className={styles.redirectLink}>
          Don't have an account? Sign up
        </Link>
      </AuthForm>
    </>
  );
};

export default Login;

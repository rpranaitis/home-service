import Button from '../../components/Button/Button';
import AuthForm from '../../components/AuthForm/AuthForm';
import Input from '../../components/Input/Input';
import styles from './Register.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import { ROUTES } from '../../router/constants';
import { login, register } from '../../api/auth';
import { FormEvent, useState } from 'react';

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = { name, age: parseInt(age), email, password };
    
    register(data).then(response => {
      if (response) {
        alert('Registration successfull!')
        navigate(ROUTES.LOGIN);
      }
    });
  };

  return (
    <>
      <AuthForm onSubmit={handleRegister}>
        <h2 className={styles.header}>Register</h2>
        <div className={styles.inputsWrapper}>
          <Input onChange={(e) => setName(e.target.value)} type="text" placeholder="Name" />
          <Input onChange={(e) => setAge(e.target.value)} type="number" placeholder="Age" />
          <Input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" />
          <Input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
          <Button type="submit">Register</Button>
        </div>
        <Link to={ROUTES.LOGIN} className={styles.redirectLink}>
          Already have an account? Log in
        </Link>
      </AuthForm>
    </>
  );
};

export default Register;

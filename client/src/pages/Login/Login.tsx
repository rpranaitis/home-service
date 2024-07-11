import Button from '../../components/Button/Button';
import InputField from '../../components/InputField/InputField';
import styles from './Login.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import { ROUTES } from '../../router/constants';
import { useUserContext } from '../../context/UserContext';
import { login as loginApi } from '../../api/auth';
import { Formik, Form } from 'formik';
import { loginValidationSchema } from '../../schemas/auth';
import { LoginFormValues } from '../../types/common';

const initialValues: LoginFormValues = {
  email: '',
  password: '',
};

const Login = () => {
  const navigate = useNavigate();
  const { login } = useUserContext();

  const handleSubmit = (values: LoginFormValues) => {
    loginApi(values).then((response) => {
      if (response) {
        login(response.user, response.token);
        navigate(ROUTES.HOME);
      }
    });
  };

  return (
    <Formik initialValues={initialValues} validationSchema={loginValidationSchema} onSubmit={handleSubmit}>
      {({ isSubmitting }) => (
        <Form className={styles.form}>
          <h2 className={styles.header}>Login</h2>
          <div className={styles.inputsWrapper}>
            <InputField name="email" type="email" placeholder="Email" />
            <InputField name="password" type="password" placeholder="Password" />
            <Button type="submit" disabled={isSubmitting}>
              Log in
            </Button>
          </div>
          <Link to={ROUTES.REGISTER} className={styles.redirectLink}>
            Don't have an account? Sign up
          </Link>
        </Form>
      )}
    </Formik>
  );
};

export default Login;

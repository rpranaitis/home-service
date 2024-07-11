import Button from '../../components/Button/Button';
import InputField from '../../components/InputField/InputField';
import styles from './Register.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import { ROUTES } from '../../router/constants';
import { RegisterFormValues } from '../../types/common';
import { registerValidationSchema } from '../../schemas/auth';
import { Formik, Form } from 'formik';
import { useRegisterUser } from '../../hooks/user';

const initialValues: RegisterFormValues = {
  name: '',
  age: '',
  email: '',
  password: '',
};

const Register = () => {
  const navigate = useNavigate();
  const { mutateAsync: registerUser } = useRegisterUser();

  const handleSubmit = async (values: RegisterFormValues) => {
    try {
      await registerUser(values);
      alert('Registration successfull!');
      navigate(ROUTES.LOGIN);
    } catch (error: any) {
      alert(error.response.data.message ?? 'An unexpected error occurred.');
    }
  };

  return (
    <Formik initialValues={initialValues} validationSchema={registerValidationSchema} onSubmit={handleSubmit}>
      {({ isSubmitting }) => (
        <Form className={styles.form}>
          <h2 className={styles.header}>Register</h2>
          <div className={styles.inputsWrapper}>
            <InputField name="name" type="text" placeholder="Name" />
            <InputField name="age" type="number" placeholder="Age" />
            <InputField name="email" type="email" placeholder="Email" />
            <InputField name="password" type="password" placeholder="Password" />
            <Button type="submit" disabled={isSubmitting}>
              Register
            </Button>
          </div>
          <Link to={ROUTES.LOGIN} className={styles.redirectLink}>
            Already have an account? Log in
          </Link>
        </Form>
      )}
    </Formik>
  );
};

export default Register;

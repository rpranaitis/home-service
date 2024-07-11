import Button from '../../components/Button/Button';
import InputField from '../../components/InputField/InputField';
import styles from './Register.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import { ROUTES } from '../../router/constants';
import { register } from '../../api/auth';
import { RegisterFormValues } from '../../types/common';
import { registerValidationSchema } from '../../schemas/auth';
import { Formik, Form } from 'formik';

const initialValues: RegisterFormValues = {
  name: '',
  age: '',
  email: '',
  password: '',
};

const Register = () => {
  const navigate = useNavigate();

  const handleSubmit = (values: RegisterFormValues) => {
    const data = {
      name: values.name,
      age: parseInt(values.age),
      email: values.email,
      password: values.password,
    };

    register(data).then((response) => {
      if (response) {
        alert('Registration successfull!');
        navigate(ROUTES.LOGIN);
      }
    });
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

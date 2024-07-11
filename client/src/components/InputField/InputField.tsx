import { Field, ErrorMessage } from 'formik';
import styles from './InputField.module.scss';

interface FormikFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

const InputField = ({ name, ...props }: FormikFieldProps) => {
  return (
    <div>
      <Field className={styles.inputField} name={name} {...props} />
      <ErrorMessage name={name} component="div" className={styles.error} />
    </div>
  );
};

export default InputField;

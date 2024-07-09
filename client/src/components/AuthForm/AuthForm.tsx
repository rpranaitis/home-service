import { FC, FormHTMLAttributes, ReactNode } from 'react';
import styles from './AuthForm.module.scss';

interface AuthFormProps extends FormHTMLAttributes<HTMLFormElement> {
  children: ReactNode;
}

const AuthForm: FC<AuthFormProps> = ({ children, ...props }) => {
  return (
    <form className={styles.form} {...props}>
      {children}
    </form>
  );
};

export default AuthForm;

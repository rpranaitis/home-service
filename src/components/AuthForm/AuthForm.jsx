import PropTypes from 'prop-types';
import styles from './AuthForm.module.scss';

const AuthForm = ({ children, ...props }) => {
  return (
    <form className={styles.form} {...props}>
      {children}
    </form>
  );
};

AuthForm.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthForm;

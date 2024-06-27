import PropTypes from 'prop-types';
import styles from './Form.module.scss';

const Form = ({ children, ...props }) => {
  return (
    <form className={styles.form} {...props}>
      {children}
    </form>
  );
};

Form.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Form;

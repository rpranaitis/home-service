import PropTypes from 'prop-types';
import styles from './Button.module.scss';

const Button = ({ clean = false, children, ...props }) => {
  return (
    <button className={clean ? styles.clean : styles.button} {...props}>
      {children}
    </button>
  );
};

Button.propTypes = {
  clean: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default Button;

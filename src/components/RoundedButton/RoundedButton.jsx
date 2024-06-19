import PropTypes from 'prop-types';
import styles from './RoundedButton.module.scss';

const RoundedButton = ({ children, ...props }) => {
  return (
    <button className={styles.button} {...props}>
      {children}
    </button>
  );
};

RoundedButton.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RoundedButton;

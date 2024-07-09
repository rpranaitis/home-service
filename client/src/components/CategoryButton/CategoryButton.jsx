import PropTypes from 'prop-types';
import styles from './CategoryButton.module.scss';
import classNames from 'classnames';

const CategoryButton = ({ active = false, icon, iconColor, children, ...props }) => {
  return (
    <button className={classNames(styles.button, active ? styles.activeButton : undefined)} {...props}>
      <div style={{ color: iconColor }} className={styles.icon}>
        {icon}
      </div>
      {children}
    </button>
  );
};

CategoryButton.propTypes = {
  active: PropTypes.bool,
  icon: PropTypes.node.isRequired,
  iconColor: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default CategoryButton;

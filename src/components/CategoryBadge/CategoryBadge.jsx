import PropTypes from 'prop-types';
import styles from './CategoryBadge.module.scss';

const CategoryBadge = ({ children }) => {
  return <div className={styles.badge}>{children}</div>;
};

CategoryBadge.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CategoryBadge;

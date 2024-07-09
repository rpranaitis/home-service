import PropTypes from 'prop-types';
import styles from './CategoryCard.module.scss';

const CategoryCard = ({ icon, iconColor, title, ...props }) => {
  return (
    <div className={styles.categoryCard} {...props}>
      <span className={styles.icon} style={{ color: iconColor }}>
        {icon}
      </span>
      <span className={styles.title}>{title}</span>
    </div>
  );
};

CategoryCard.propTypes = {
  icon: PropTypes.node.isRequired,
  iconColor: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default CategoryCard;

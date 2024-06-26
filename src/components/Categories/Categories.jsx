import CategoryCard from '../../components/CategoryCard/CategoryCard';
import styles from './Categories.module.scss';
import { MdCleaningServices, MdOutlinePlumbing, MdOutlineElectricalServices } from 'react-icons/md';
import { GiAutoRepair } from 'react-icons/gi';
import { PiPaintBrushHouseholdFill } from 'react-icons/pi';
import { FaTruckMoving } from 'react-icons/fa';
import { Link, generatePath, useNavigate } from 'react-router-dom';
import { ROUTES } from '../../router/constants';

const Categories = () => {
  const categories = [
    {
      icon: <MdCleaningServices />,
      iconColor: '#b51fef',
      title: 'Cleaning',
    },
    {
      icon: <GiAutoRepair />,
      iconColor: '#e7b633',
      title: 'Repair',
    },
    {
      icon: <PiPaintBrushHouseholdFill />,
      iconColor: '#079c9e',
      title: 'Painting',
    },
    {
      icon: <FaTruckMoving />,
      iconColor: '#e33e44',
      title: 'Shifting',
    },
    {
      icon: <MdOutlinePlumbing />,
      iconColor: '#ed9514',
      title: 'Plumbing',
    },
    {
      icon: <MdOutlineElectricalServices />,
      iconColor: '#0662ba',
      title: 'Electric',
    },
  ];

  const navigate = useNavigate();

  const navigateToCategory = (category) => {
    navigate(generatePath(ROUTES.SEARCH_CATEGORY, { category: category.toLowerCase() }));
  };

  return (
    <div className={styles.container}>
      {categories.map((item, index) => (
        <CategoryCard
          key={index}
          onClick={() => navigateToCategory(item.title)}
          icon={item.icon}
          iconColor={item.iconColor}
          title={item.title}
        />
      ))}
    </div>
  );
};

export default Categories;

import CategoryCard from '../../components/CategoryCard/CategoryCard';
import styles from './Categories.module.scss';
import { MdCleaningServices, MdOutlinePlumbing, MdOutlineElectricalServices } from 'react-icons/md';
import { GiAutoRepair } from 'react-icons/gi';
import { PiPaintBrushHouseholdFill } from 'react-icons/pi';
import { FaTruckMoving } from 'react-icons/fa';

const Categories = () => {
  return (
    <div className={styles.container}>
      <CategoryCard icon={<MdCleaningServices />} iconColor="#b51fef" title="Cleaning" />
      <CategoryCard icon={<GiAutoRepair />} iconColor="#e7b633" title="Repair" />
      <CategoryCard icon={<PiPaintBrushHouseholdFill />} iconColor="#079c9e" title="Painting" />
      <CategoryCard icon={<FaTruckMoving />} iconColor="#e33e44" title="Shifting" />
      <CategoryCard icon={<MdOutlinePlumbing />} iconColor="#ed9514" title="Plumbing" />
      <CategoryCard icon={<MdOutlineElectricalServices />} iconColor="#0662ba" title="Electric" />
    </div>
  );
};

export default Categories;

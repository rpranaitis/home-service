import styles from './App.module.scss';
import CategoryCard from './components/CategoryCard/CategoryCard';
import SearchBar from './components/SearchBar/SearchBar';
import Topbar from './components/Topbar/Topbar';
import { MdCleaningServices, MdOutlinePlumbing, MdOutlineElectricalServices } from 'react-icons/md';
import { GiAutoRepair } from 'react-icons/gi';
import { PiPaintBrushHouseholdFill } from 'react-icons/pi';
import { FaTruckMoving } from 'react-icons/fa';

function App() {
  return (
    <>
      <Topbar />
      <div className={styles.containerWrapper}>
        <div className={styles.container}>
          <h1>
            Find Home <span className={styles.primaryColor}>Service/Repair</span> Near You
          </h1>
          <h5>Explore Best Home Service & Repair near you</h5>
          <SearchBar style={{ width: '100%', marginTop: 5 }} />
        </div>
        <div className={styles.categories}>
          <CategoryCard icon={<MdCleaningServices />} iconColor="#b51fef" title="Cleaning" />
          <CategoryCard icon={<GiAutoRepair />} iconColor="#e7b633" title="Repair" />
          <CategoryCard icon={<PiPaintBrushHouseholdFill />} iconColor="#079c9e" title="Painting" />
          <CategoryCard icon={<FaTruckMoving />} iconColor="#e33e44" title="Shifting" />
          <CategoryCard icon={<MdOutlinePlumbing />} iconColor="#ed9514" title="Plumbing" />
          <CategoryCard icon={<MdOutlineElectricalServices />} iconColor="#0662ba" title="Electric" />
        </div>
      </div>
    </>
  );
}

export default App;

import SearchBar from '../SearchBar/SearchBar';
import styles from './Hero.module.scss';

const Hero = () => {
  return (
    <div className={styles.container}>
      <h1>
        Find Home <span className={styles.primaryColor}>Service/Repair</span> Near You
      </h1>
      <h5>Explore Best Home Service & Repair near you</h5>
      <SearchBar style={{ width: '100%', marginTop: 5 }} />
    </div>
  );
};

export default Hero;

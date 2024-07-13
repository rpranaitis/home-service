import SearchBar from '../SearchBar/SearchBar';
import styles from './Hero.module.scss';
import { FC } from 'react';
import { Business } from '../../types/common';
import { searchBusinesses } from '../../api/business';

interface HeroProps {
  setSearchResults: (businesses: Business[]) => void;
}

const Hero: FC<HeroProps> = ({ setSearchResults }) => {
  const handleSearchBusinesses = async (query: string) => {
    if (query) {
      const response = await searchBusinesses(query);
      setSearchResults(response);
    } else {
      setSearchResults([]);
    }
  };

  return (
    <div className={styles.container}>
      <h1>
        Find Home <span className={styles.primaryColor}>Service/Repair</span> Near You
      </h1>
      <h5>Explore Best Home Service & Repair near you</h5>
      <SearchBar onSearch={handleSearchBusinesses} />
    </div>
  );
};

export default Hero;

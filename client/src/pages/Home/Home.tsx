import Hero from '@/components/Hero/Hero';
import Categories from '@/components/Categories/Categories';
import styles from './Home.module.scss';
import { useState } from 'react';
import { Business } from '../../types/common';
import BusinessCard from '../../components/BusinessCard/BusinessCard';

const Home = () => {
  const [searchResults, setSearchResults] = useState<Business[]>([]);

  return (
    <>
      <Hero setSearchResults={setSearchResults} />
      {searchResults.length > 0 ? (
        <div className={styles.businessContainer}>
          {searchResults.map((item) => (
            <BusinessCard key={item._id} business={item} />
          ))}
        </div>
      ) : (
        <Categories />
      )}
    </>
  );
};

export default Home;

import RoundedButton from '../RoundedButton/RoundedButton';
import RoundedInput from '../RoundedInput/RoundedInput';
import styles from './SearchBar.module.scss';
import { CiSearch } from 'react-icons/ci';

const SearchBar = (props) => {
  return (
    <div className={styles.searchBar} {...props}>
      <RoundedInput placeholder="Search" style={{ width: '90%' }} />
      <RoundedButton>
        <CiSearch />
      </RoundedButton>
    </div>
  );
};

export default SearchBar;
